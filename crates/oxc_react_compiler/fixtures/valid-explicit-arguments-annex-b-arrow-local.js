// @script
function Component() {
  {
    function arguments() {
      return 'outer';
    }
  }
  const read = () => {
    {
      function arguments() {
        return 'inner';
      }
    }
    return arguments();
  };
  return read();
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
