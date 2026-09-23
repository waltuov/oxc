// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = [timestamp];
  const [alias] = [args];
  alias.pop();
  return new Date(...args);
}
