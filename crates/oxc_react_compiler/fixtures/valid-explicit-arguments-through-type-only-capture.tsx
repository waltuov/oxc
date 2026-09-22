// @script
function Component({value}) {
  let arguments = {value};
  const read = () => {
    type arguments = unknown;
    return arguments.value;
  };
  arguments = {value: `${arguments.value}!`};
  return <div>{read()}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 'hello'}],
};
