module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
      let currChar = str[i];
      let found = false;
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (currChar === bracketsConfig[j][0]) {
              stack.push(bracketsConfig[j][1]);
              found = true;
              break;
          }
          if (currChar === bracketsConfig[j][1]) {
              if (stack.length === 0 || stack.pop() !== currChar) {
                  return false;
              }
              found = true;
              break;
          }
      }
      if (!found) {
          return false;
      }
  }
  return stack.length === 0;
}

