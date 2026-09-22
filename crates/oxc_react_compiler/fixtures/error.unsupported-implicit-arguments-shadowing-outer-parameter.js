// @script
function Component(arguments) {
  const read = function (value) {
    return arguments[0];
  };
  return <div>{read('hello')}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'outer'}],
};
