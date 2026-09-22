// @script
function Component(arguments) {
  const read = (copy = arguments) => {
    var arguments;
    return copy;
  };
  return read().value;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
