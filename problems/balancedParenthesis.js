// Given a string, return true if it contains balanced parenthesis ().
// Extra credit: solve for [] & {}

var isBalanced = function(string) {
  var stack = [];
  var balanced = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  for (var i = 0; i < string.length; i++) {
    var checkVal = string[i];
    // check if key exists
    if (balanced[checkVal]) {
      stack.push(checkVal);
      // skip to next iteration
      continue;
    }
    
    var lastItemInStack = stack[stack.length - 1];
    // if checkVal is a value in balanced (only closing parens)
    if (checkVal === balanced[lastItemInStack]) {
      stack.pop();
    }
  }

  // if stack still has items, parens not balanced
  return stack.length === 0;
};