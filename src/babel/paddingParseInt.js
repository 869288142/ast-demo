const visitor = require('./core')
const code = `parseInt(a)` ;
const t = require("@babel/types")
const result = visitor(code, {
    enter(path) {
        if(t.isExpressionStatement(path.node) && t.isCallExpression(path.node.expression) && path.node.expression.callee.name === 'parseInt') {
            path.node.expression.arguments.push(t.numericLiteral(10))
        }
    }
})

console.log(result);
