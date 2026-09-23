// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = [timestamp];
  const box = {args};
  return [box, new Date(...args)];
}
