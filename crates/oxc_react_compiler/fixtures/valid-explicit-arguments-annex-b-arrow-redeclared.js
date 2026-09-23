// @script
function Component() {
  const read = () => {
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
    return arguments();
  };
  return read();
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
