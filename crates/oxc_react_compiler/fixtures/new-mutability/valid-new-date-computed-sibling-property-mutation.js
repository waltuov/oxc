// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const args = [timestamp];
  const other = [timestamp];
  const box = {args, other};
  const key = 'other';
  box[key].pop();
  return new Date(...box.args);
}
