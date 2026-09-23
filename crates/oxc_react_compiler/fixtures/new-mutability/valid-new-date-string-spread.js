// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({cond}) {
  const text = cond ? "0" : "1";
  return [new Date(..."0"), new Date(...text), new Date(...[..."0"])];
}
