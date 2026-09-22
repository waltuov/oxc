// @script
function Component(arguments) {
  const read = () => arguments.value;
  return <div>{read()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
