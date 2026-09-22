// @script
function Component(value) {
  var arguments;
  const read = () => arguments[0];
  return <div>{read()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
