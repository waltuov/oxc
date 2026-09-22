// @script
const Component = function arguments(value) {
  return <div>{arguments[0]}</div>;
};

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
