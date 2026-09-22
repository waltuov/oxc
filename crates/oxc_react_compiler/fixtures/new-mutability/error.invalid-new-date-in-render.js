// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const date = new Date();
  const time = new Date().getTime();
  const year = new Date().getFullYear();
  const called = Date(0);
  const propertyCalled = globalThis.Date(0);
  const spread = new Date(...[]);
  const args = [timestamp];
  args.pop();
  const mutatedSpread = new Date(...args);
  return <Foo date={date} time={time} year={year} called={called} propertyCalled={propertyCalled} spread={spread} mutatedSpread={mutatedSpread} />;
}
