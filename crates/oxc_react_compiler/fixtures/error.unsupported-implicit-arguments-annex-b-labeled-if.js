// @script
function Component(flag) {
  function arguments() {
    return 'base';
  }
  if (flag) {
    label: function arguments() {
      return 'inner';
    }
  }
  return arguments();
}
