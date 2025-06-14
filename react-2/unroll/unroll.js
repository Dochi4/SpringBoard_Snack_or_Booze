function unroll(squareArray) {
  const arr = [];

  while (squareArray.length) {
    arr.push(
      ...squareArray.shift(),
      ...squareArray.map((a) => a.pop()),
      ...(squareArray.pop() || []).reverse(),
      ...squareArray.map((a) => a.shift()).reverse()
    );
  }
  return arr;
}

// created with help from https://stackoverflow.com/questions/30906366/spiral-traversal-of-a-matrix-recursive-solution-in-javascript

module.exports = unroll;
