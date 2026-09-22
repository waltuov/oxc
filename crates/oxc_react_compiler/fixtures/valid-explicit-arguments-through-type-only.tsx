// @script
function Component(arguments) {
  {
    type arguments = unknown;
    return <div>{arguments.value}</div>;
  }
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
