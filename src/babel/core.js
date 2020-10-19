let { parse } = require("@babel/parser")

let generate = require("@babel/generator").default

const traverse = require("@babel/traverse").default;

function visitor(code, visitorObj) {
    // code -> AST
    const ast = parse(code);
    // modify AST
    traverse(ast, visitorObj);
    // ast -> code
    const { code: transformCode } = generate(ast, { /* options */ });
    return transformCode
}


module.exports = visitor
