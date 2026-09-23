// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const args = [timestamp];
  const box = {args};
  mutate(box);
  return new Date(...box.args);
}
