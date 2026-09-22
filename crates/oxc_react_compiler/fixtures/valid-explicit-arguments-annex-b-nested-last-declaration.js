// @script
function Component() {
  {
    function arguments() {
      return 'outer';
    }
    {
      function arguments() {
        return 'inner';
      }
    }
  }
  return <div>{arguments()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
