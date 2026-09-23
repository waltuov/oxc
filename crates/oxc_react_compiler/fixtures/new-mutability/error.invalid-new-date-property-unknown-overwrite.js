// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const args = [timestamp];
  const box = {args};
  box[key] = '';
  return new Date(...box.args);
}
