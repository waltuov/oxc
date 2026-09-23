// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key}) {
  const args = [];
  args[key] = () => 0;
  args.push(timestamp);
  return new Date(...args);
}
