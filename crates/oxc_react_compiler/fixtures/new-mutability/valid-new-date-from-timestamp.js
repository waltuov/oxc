// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, other, rest}) {
  const date = new Date(timestamp);
  const explicitBeforeSpread = new Date(timestamp, ...rest);
  const explicitAfterSpread = new Date(...rest, timestamp);
  const nonemptyArraySpread = new Date(...[timestamp]);
  const nestedNonemptyArraySpread = new Date(...[...[timestamp]]);
  const args = [timestamp];
  const boundNonemptyArraySpread = new Date(...args);
  args.push(other);
  const pushedNonemptyArraySpread = new Date(...args);
  const initiallyEmptyArgs = [];
  initiallyEmptyArgs.push(timestamp);
  const pushedFromEmptyArraySpread = new Date(...initiallyEmptyArgs);
  return (
    <Foo
      date={date}
      explicitBeforeSpread={explicitBeforeSpread}
      explicitAfterSpread={explicitAfterSpread}
      nonemptyArraySpread={nonemptyArraySpread}
      nestedNonemptyArraySpread={nestedNonemptyArraySpread}
      boundNonemptyArraySpread={boundNonemptyArraySpread}
      pushedNonemptyArraySpread={pushedNonemptyArraySpread}
      pushedFromEmptyArraySpread={pushedFromEmptyArraySpread}
    />
  );
}
