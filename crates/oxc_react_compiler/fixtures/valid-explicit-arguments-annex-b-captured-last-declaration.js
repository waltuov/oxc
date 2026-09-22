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
  const read = () => arguments();
  return <div>{read()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
