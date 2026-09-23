// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  if (cond) {
    args.push(timestamp);
  } else {
    args.push(0);
  }
  const branchLocalArgs = cond ? [timestamp] : [0];
  return [new Date(...args), new Date(...branchLocalArgs)];
}
