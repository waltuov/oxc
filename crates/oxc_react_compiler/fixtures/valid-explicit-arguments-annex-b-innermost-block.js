// @script
function Component() {
  let result;
  {
    {
      function arguments() {
        return 'inner';
      }
      result = arguments();
    }
    function arguments() {
      return 'outer';
    }
  }
  return <div>{result}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
