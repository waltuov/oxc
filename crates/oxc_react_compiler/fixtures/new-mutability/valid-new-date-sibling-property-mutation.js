// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const args = [timestamp];
  const other = [timestamp];
  const box = {args, other};
  box.other.pop();
  return new Date(...args);
}
