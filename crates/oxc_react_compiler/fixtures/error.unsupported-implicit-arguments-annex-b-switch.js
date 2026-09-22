// @script
function Component(value) {
  switch (0) {
    case 1:
      function arguments() {}
  }
  return <div>{arguments[0].value}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
