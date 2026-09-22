// @script
function Component(value) {
  function arguments(input) {
    return input;
  }
  let result;
  for (let i = 0; i < 2; i++) {
    result = arguments(value);
    if (i === 0) {
      function arguments() {
        return 'inner';
      }
    }
  }
  return <div>{result}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['hello'],
};
