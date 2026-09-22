// @script
function Component(value) {
  {
    function arguments(input) {
      return input;
    }
  }
  {
    let arguments = () => 'inner';
    arguments();
  }
  return <div>{arguments(value)}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
