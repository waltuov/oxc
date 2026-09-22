// @script
function Component(value) {
  do {
    function arguments(input) {
      return input;
    }
  } while (false);
  return <div>{arguments(value)}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
