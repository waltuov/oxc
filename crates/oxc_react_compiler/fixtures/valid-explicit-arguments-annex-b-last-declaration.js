// @script
function Component() {
  {
    function arguments() {
      return 'first';
    }
  }
  {
    function arguments() {
      return 'second';
    }
  }
  return <div>{arguments()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
