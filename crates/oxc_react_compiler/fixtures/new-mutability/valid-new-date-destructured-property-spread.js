// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const box = {args: [timestamp], other: [timestamp]};
  const {args, other} = box;
  other.pop();
  return new Date(...args);
}
