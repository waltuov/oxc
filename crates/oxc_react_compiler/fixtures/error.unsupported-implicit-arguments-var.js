// @script
function Component(value) {
  var arguments;
  return <div>{arguments[0]}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
