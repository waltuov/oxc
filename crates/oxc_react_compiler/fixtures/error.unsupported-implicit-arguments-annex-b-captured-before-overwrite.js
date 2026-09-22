// @script
function Component() {
  {
    function arguments() {
      return 'first';
    }
  }
  const read = () => arguments();
  {
    function arguments() {
      return 'second';
    }
  }
  return <div>{read()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
