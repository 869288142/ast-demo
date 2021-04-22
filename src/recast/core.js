const { parse, print,visit } = require('recast')

module.exports = function visitor(code, visitor) {
    // code -> ast
    const ast = parse(code)
    visit(ast, visitor)
    // ast -> code
    return print(ast).code
}






jscodeshift

gogocode

// 查找
// 构造
// 修改