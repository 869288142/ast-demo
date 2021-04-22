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
    let map = {} 

    path.node.arguments[0].properties.forEach((property) => {
       
      map[property.key.name] = j(property.value)
    })

    let type = (map['type'].toSource() || 'get').toLocaleLowerCase().replace(/["']/g, "")

    let data = map['data'].toSource() || '{}'
    let url = map['url'].toSource() || ''
    let success = map['success'].toSource() || '() => {}'
    let error = map['error'].toSource() || '() => {}'
    let successParamName  = null
    let successParamBody = null
    map['success'].forEach((path) => {
      successParamName =  path.node.params[0].name
      successParamBody = j(path.node.body).toSource()
    })

    let r = `jzRequest.${type}(${url}, {
      ${[type  === 'get' ? "params" : "data"]}: ${data}
    }).catch(${error}).then(function (response) {
      const { data : ${successParamName} } = response
      ${successParamBody}
    })`

    console.log(r);

  });;

};
