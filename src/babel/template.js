const template  = require( "@babel/template").default;
const generate = require( "@babel/generator").default;
const t = require( "@babel/types");

// code

const buildRequire = template(`
  var %%importName%% = require(%%source%%);
`);

const ast = buildRequire({
  importName: t.identifier("myModule"),
  source: t.stringLiteral("my-module"),
});


// ast

const name = "my-module";
const mod = "myModule";

const ast = template.ast`
  var ${mod} = require("${name}");
`;

// console.log(ast);
