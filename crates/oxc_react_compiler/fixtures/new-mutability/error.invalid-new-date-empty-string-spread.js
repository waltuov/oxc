// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({cond}) {
  const text = cond ? "0" : "";
  return [new Date(...""), new Date(...text)];
}
