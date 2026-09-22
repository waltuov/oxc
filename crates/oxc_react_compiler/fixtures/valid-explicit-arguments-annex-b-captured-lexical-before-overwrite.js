// @script
function Component() {
  let read;
  {
    function arguments() {
      return 'first';
    }
    read = () => arguments();
  }
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
