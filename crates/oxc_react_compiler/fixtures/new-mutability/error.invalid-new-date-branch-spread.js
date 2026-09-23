// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [timestamp];
  if (cond) {
    args.pop();
  } else {
    args.push(timestamp);
  }
  return new Date(...args);
}
