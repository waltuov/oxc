// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({value}) {
  return [new Date(...``), new Date(...`${value}`)];
}
