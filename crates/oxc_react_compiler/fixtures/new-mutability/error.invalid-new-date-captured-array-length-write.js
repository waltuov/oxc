// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = [timestamp];
  const box = {args};
  box.args.length = 0;
  return new Date(...args);
}
