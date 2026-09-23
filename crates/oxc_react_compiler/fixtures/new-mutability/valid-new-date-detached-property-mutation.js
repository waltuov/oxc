// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const args = [timestamp];
  const box = {args};
  box.args = [];
  box.args.pop();
  return new Date(...args);
}
