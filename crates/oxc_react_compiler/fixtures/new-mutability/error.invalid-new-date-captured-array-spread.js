// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = [timestamp];
  const box = {args};
  box.args.pop();
  return new Date(...args);
}
