// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key}) {
  const args = [];
  args.push = () => 0;
  delete args.push;
  args.push(timestamp);
  return new Date(...args);
}
