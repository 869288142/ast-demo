const MyVisitor = {
  Identifier: {
    enter() {
      console.log("Entered!");
    },
    exit() {
      console.log("Exited!");
    },
  },
};

const MyVisitor = {
  "ExportNamedDeclaration|Flow"(path) {},
};
