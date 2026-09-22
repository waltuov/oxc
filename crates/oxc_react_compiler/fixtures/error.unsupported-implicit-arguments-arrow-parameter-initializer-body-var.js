// @script
function Component(value) {
  const read = (copy = arguments[0]) => {
    var arguments;
    return copy;
  };
  return read();
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
