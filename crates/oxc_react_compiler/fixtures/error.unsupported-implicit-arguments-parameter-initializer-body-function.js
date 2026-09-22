// @script
function Component(props, copy = arguments[0]) {
  function arguments() {}
  return <div>{copy.value}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
