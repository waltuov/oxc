// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond, key, mutate}) {
  const a = [];
  const b = [];
  const target = cond ? a : b;
  target.push(timestamp);
  return new Date(...a);
}
