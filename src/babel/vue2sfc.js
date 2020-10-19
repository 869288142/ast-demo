const visitor = require('./core')
const code = `Vue.component({
    template: '<div><div>',
    data(){
        return {
           
       }
    },
    methods: {
        
    }
   })
   ` ;
const t = require("@babel/types")
const  template =  require("@babel/template").default;
let generate = require("@babel/generator").default

let result = {
    other:[],
    otherCode: ''
}
visitor(code, {
    enter(path) {
        if(t.isExpressionStatement(path.node) && t.isCallExpression(path.node.expression) &&  path.node.expression.callee.object.name === 'Vue'&& path.node.expression.callee.property.name === 'component'){
            let arguments = Array.from(path.node.expression.arguments[0].properties)
        
            arguments.forEach((arg) => {
                if(arg.key.name === "template"){
                    result.template =  generate(arg.value).code.replace(/'|"/g, "")
                }else {
                    result.other.push(generate(arg).code)
                }
            })
        }
    }
})
console.log(`
<template>
    ${result.template}
</template>
<script>
    ${result.otherCode}
    export default {
        ${result.other}
    }
</script>
`);

