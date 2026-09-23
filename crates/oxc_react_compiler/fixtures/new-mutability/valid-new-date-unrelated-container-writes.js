// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, key}) {
  const args = [timestamp];
  const box = {args};
  box.other = 1;
  box[key] = 2;
  delete box.other;
  const outer = {box};
  outer.box.other = 3;
  return new Date(...args);
}
