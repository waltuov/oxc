// @script
function Component(arguments, flag) {
  if (flag) {
    function arguments() {}
  }
  return arguments.value;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}, true],
};
