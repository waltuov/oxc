// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({value}) {
  const text = `0${value}`;
  return [new Date(...`0`), new Date(...text)];
}
