// @script
function Component() {
  var arguments;
  function arguments() {
    return 'ok';
  }
  return <div>{arguments()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
