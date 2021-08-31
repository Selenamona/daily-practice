const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const code = `
  function func() {
    const guang = 'guang2';
    function func2() {
      const ssh = 'ssh2';
      {
        function func3 () {
          const suzhe = 'suzhe2';
        }
      }
    }
  }
`;

const ast = parser.parse(code);

traverse(ast, {
  FunctionDeclaration (path) {
    if (path.get('id.name').node === 'func3') {
      console.log(path.scope.dump());
    }
  }
})

function func() {
  const guang = 'guang';
  function func2() {
    const ssh = 'ssh';
    function func3 () {
      const suzhe = 'suzhe';
    }
    return func3;
  }
  return func2;
}

const func2 = func();
const func3 = func2()
func3()
console.log("🚀 ~ file: index.js ~ line 42 ~ func3", func3)


