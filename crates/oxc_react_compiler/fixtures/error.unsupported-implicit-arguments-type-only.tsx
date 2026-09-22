// @script
function Component(value) {
  type arguments = unknown;
  return <div>{arguments[0].value}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
