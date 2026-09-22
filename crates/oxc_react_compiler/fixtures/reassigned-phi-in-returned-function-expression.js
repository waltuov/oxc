function Component(...args) {
  const props = args[0];
  return () => {
    let str;
    if (args.length) {
      str = args[0];
    } else {
      str = props.str;
    }
    global.log(str);
  };
}
