module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = api.j(fileInfo.source);

  let a = root.find(j.CallExpression, {
    callee: {
      type: "MemberExpression",
      object: { type: "Identifier", name: "$" },
      property: { type: "Identifier", name: "ajax" },
    },
  }).forEach(path => {
     path.node.arguments[0].properties
      
  });;

};
