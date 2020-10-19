const { parse, print,visit } = require('recast')

module.exports = function visitor(code, visitor) {
    // code -> ast
    const ast = parse(code)
    visit(ast, visitor)
    // ast -> code
    return print(ast).code
}