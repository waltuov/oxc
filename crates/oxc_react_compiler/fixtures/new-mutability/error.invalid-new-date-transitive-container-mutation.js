// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, mutate}) {
  const args = [timestamp];
  const box = {args};
  mutate(box);
  return new Date(...args);
}
