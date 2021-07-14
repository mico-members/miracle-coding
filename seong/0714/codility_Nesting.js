solution = (A) => {
  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === ")")
      if (arr[arr.length - 1] === "(") arr.pop();
      else return 0;
    else if (A[i] === "(") arr.push(A[i]);
  }
  return arr.length === 0 ? 1 : 0;
};

console.log(solution("())("));
