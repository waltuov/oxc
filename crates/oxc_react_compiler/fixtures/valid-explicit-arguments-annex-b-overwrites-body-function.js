// @script
function Component() {
  function arguments() {
    return 'base';
  }
  {
    function arguments() {
      return 'inner';
    }
  }
  return <div>{arguments()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
