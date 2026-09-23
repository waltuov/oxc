// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, count}) {
  const args = [timestamp];
  for (let i = 0; i < count; i++) {
    args.pop();
  }
  return new Date(...args);
}
