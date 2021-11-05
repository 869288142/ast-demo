const visitor = require('./core')
const code = `import(  './c.vue')` ;
const t = require("@babel/types")

const result = visitor(code, {
   
    CallExpression(path) {
        if (path.get('callee').toString() === 'import') {
            t.addComment(path.node.arguments[0],'leading', 'webpackMode : "eager"')
            // path.replaceWith
            //     t.callExpression({
            //         type: 'Import',
            //         leadingComments: [],
            //         innerComments:[],
            //         trailingComments: [],
            //         start: 0,
            //         end: 6,
            //         loc: null
            //     }, [t.stringLiteral(path.node.arguments[0].value)])
            //   );
        }
    }
})

console.log(result);

// // import(   /* webpackMode: "eager" */ './c.vue')
// import(
//     /*/* webpackMode: "eager" */*/
//     './c.vue');