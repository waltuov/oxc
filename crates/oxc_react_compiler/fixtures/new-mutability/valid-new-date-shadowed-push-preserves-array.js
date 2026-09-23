// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key}) {
  const args = [timestamp];
  args.push = () => 0;
  args.push(timestamp);
  return new Date(...args);
}
