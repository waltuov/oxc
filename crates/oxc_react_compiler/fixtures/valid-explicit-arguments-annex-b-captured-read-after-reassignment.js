// @script
function Component(replacement) {
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
  const read = () => arguments();
  arguments = replacement;
  return <div>{read()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [() => 'replacement'],
};
