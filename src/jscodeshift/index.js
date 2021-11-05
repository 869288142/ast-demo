const { stringLiteral } = require("jscodeshift");

/**
 * @typedef { Object } api
 * @property {import("jscodeshift")} jscodeshift
 * @param {*} fileInfo
 * @param {api} api
 */
module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

 



  return root
    .find(j.AssignmentExpression, {
      left: {
        type: "MemberExpression",
        object: {
          type: "Identifier",
          name: "location",
        },
        property: {
          type: "Identifier",
          name: "href",
        },
      },
    })
    .forEach((path) => {
        path.node.right = j.callExpression(
          j.identifier('change'),
          [path.node.right]
        )

    })
    .toSource();
};
