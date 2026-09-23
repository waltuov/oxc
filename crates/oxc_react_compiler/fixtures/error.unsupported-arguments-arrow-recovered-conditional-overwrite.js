// @script
function Component({flag}) {
  const read = () => {
  {
    function arguments() { return 'base'; }
  }
  if (flag) {
    function arguments() { return 'inner'; }
  }
  return arguments();
  };
  return read();
}
