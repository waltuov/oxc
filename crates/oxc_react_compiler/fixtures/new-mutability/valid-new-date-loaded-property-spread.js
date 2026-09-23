// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const args = [timestamp];
  const box = {args};
  return new Date(...box.args);
}
