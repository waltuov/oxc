// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [timestamp];
  const box = {nested: {args}};
  const other = {nested: {args: [timestamp]}};
  const selected = cond ? box : other;
  selected.nested.args.pop();
  return new Date(...args);
}
