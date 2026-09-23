// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key}) {
  const args = [];
  args.push();
  args.push(timestamp);
  args.push();
  return new Date(...args);
}
