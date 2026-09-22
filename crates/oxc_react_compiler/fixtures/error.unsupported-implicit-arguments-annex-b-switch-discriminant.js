// @script
function Component(value) {
  switch (arguments[0].value) {
    case 'other':
      function arguments() {}
  }
  return <div>{value}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
