// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const [args, other] = [[timestamp], [timestamp]];
  other.pop();
  return new Date(...args);
}
