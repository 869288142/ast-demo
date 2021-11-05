// path.node
// path.get('left')

// node operator

// Find a specific parent path

path.findParent((path) => path.isObjectExpression());

// Get Sibling Paths

var a = 1; // pathA, path.key = 0
var b = 2; // pathB, path.key = 1
var c = 3; // pathC, path.key = 2

export default function({ types: t }) {
    return {
      visitor: {
        VariableDeclaration(path) {
          // if the current path is pathA
          path.inList // true
          path.listKey // "body"
          path.key // 0
          path.getSibling(0) // pathA
          path.getSibling(path.key + 1) // pathB
          path.container // [pathA, pathB, pathC]
          path.getPrevSibling() // path(undefined) *
          path.getNextSibling() // pathB
          path.getAllPrevSiblings() // []
          path.getAllNextSiblings() // [pathB, pathC]
        }
      }
    };
  }