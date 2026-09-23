// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const args = [timestamp];
  const box = {args};
  const loaded = box.args;
  args.pop();
  return new Date(...loaded);
}
