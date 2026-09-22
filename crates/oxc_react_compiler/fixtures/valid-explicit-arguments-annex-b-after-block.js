// @script
function Component(value) {
  {
    function arguments(input) {
      return input;
    }
  }
  return <div>{arguments(value)}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
