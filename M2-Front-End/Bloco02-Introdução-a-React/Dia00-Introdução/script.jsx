// const element = <h1>Hello, world!</h1>;
// app.listen(3000);

function helloJsx (nome) {
  return <h1>Hello, {`${nome}`}</h1>;
}

const textJSX = helloJsx('JSX');
const container = <div>{element}</div>;

console.log(helloJsx);