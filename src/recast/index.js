const visitor = require('./core')
const recast = require('recast')
const t = recast.types.namedTypes
const { arrowFunctionExpression, blockStatement,variableDeclaration,variableDeclarator } =  recast.types.builders
const code = `function a (a, b) {
    return a + b
}`
const result =  visitor(code, {
  visitFunctionDeclaration(path) {
    // 参数
    const { params, body, id }  = path.node

    const exp = variableDeclaration('const', [
      variableDeclarator(id,arrowFunctionExpression(params, body))
    ])

    path.replace(exp) 
    
    return false
  }
})
console.log(result)



