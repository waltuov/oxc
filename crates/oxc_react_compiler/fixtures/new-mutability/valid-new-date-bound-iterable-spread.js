// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const inner = [timestamp];
  const outer = [...inner];
  const text = cond ? "0" : "1";
  const fromString = [...text];
  const fromBranch = [...(cond ? inner : outer)];
  return [new Date(...outer), new Date(...fromString), new Date(...fromBranch)];
}
