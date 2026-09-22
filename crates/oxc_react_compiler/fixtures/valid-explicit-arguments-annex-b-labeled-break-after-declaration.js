// @script
function Component(value) {
  label: {
    function arguments(input) {
      return input;
    }
    break label;
  }
  return <div>{arguments(value)}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
