const visitor = require('./core')
const code = `a == 1` ;
const t = require("@babel/types")
const result = visitor(code, {
    enter(path) {
        if(t.isExpressionStatement(path.node)) {
            if(path.node.expression.operator && path.node.expression.operator === '==') {
                path.node.expression.operator = '==='
            }
        }
    }
})

console.log(result);
