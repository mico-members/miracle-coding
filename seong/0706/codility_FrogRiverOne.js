const solution = (X, A) => {
  const foo = new Set();
  for (let i in A) {
    foo.add(A[i]);
    if (foo.size >= X) return i;
  }
  return -1;
};

const A = [1,1,1,1,1,1,1,1,1,1,1,2,1];
console.log(solution(2, A));
