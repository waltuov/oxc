// @script
function Component({flag}) {
  let read;
  {
    function arguments() { return 'base'; }
    read = () => arguments();
  }
  if (flag) {
    function arguments() { return 'inner'; }
  }
  return read();
}
