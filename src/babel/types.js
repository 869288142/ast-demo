import traverse from "@babel/traverse";
import * as t from "@babel/types";

// traverse(ast, {
//   enter(path) {
//     if (t.isIdentifier(path.node, { name: "n" })) {
//       path.node.name = "x";
//     }
//   }
// });

// Builders

// t.binaryExpression("*", t.identifier("a"), t.identifier("b"));
// a * b

// Validators

// t.isBinaryExpression(maybeBinaryExpressionNode);
