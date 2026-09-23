// @script
function Component(value) {
  const read = (copy = arguments[0]) => {
    function arguments() {}
    return copy;
  };
  return read();
}
