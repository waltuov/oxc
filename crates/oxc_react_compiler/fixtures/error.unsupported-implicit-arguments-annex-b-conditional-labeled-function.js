// @script
function Component(flag, value) {
  if (flag) {
    outer: inner: function arguments(v) {
      return v;
    }
  }
  return arguments(value);
}
