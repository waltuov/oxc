// @script
const Component = () => {
  var arguments = {value: 'hello'};
  return <div>{arguments.value}</div>;
};

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
