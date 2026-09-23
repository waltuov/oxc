// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const inner = [timestamp];
  inner.pop();
  const outer = [...inner];
  return new Date(...outer);
}
