// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key}) {
  const args = [timestamp];
  args.push = () => { args.length = 0; };
  args.push(timestamp);
  return new Date(...args);
}
