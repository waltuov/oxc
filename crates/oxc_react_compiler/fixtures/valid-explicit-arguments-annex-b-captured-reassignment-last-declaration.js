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
  const mutate = () => {
    arguments = replacement;
  };
  mutate();
  return <div>{arguments()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [() => 'replacement'],
};
