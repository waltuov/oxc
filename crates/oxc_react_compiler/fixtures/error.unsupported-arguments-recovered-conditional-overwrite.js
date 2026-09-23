// @script
function Component({flag}) {
  {
    function arguments() { return 'base'; }
  }
  if (flag) {
    function arguments() { return 'inner'; }
  }
  return arguments();
}
