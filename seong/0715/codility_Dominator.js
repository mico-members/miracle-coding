solution = (A) => {
  const counts = {};
  let dominator = 0;
  for (let i = 0; i < A.length; i++) {
    counts[A[i]] ? counts[A[i]]++ : (counts[A[i]] = 1);
    dominator = counts[dominator] > counts[A[i]] ? dominator : A[i];
  }
  return counts[dominator] > A.length / 2 ? A.indexOf(dominator) : -1;
};
const foo = [1,0];
console.log(solution(foo));
