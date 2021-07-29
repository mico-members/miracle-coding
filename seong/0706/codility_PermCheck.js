// correctness(83%)
// const solution = (A) =>
//   JSON.stringify(A.sort()) === JSON.stringify(Array.from({ length: A.length }, (_, i) => i + 1)) ? 1 : 0;

// correctness(83%)
// const solution = (A) => (A.length === new Set(A).size && A.length === A.sort().pop() ? 1 : 0);

const solution = (A) =>
  JSON.stringify(A.sort((a, b) => a - b)) === JSON.stringify(Array.from({ length: A.length }, (_, i) => i + 1)) ? 1 : 0;

console.log(solution(Array.from({ length: 10 }, (_, i) => i + 1)));
console.log(Array.from({ length: 10 }, (_, i) => i + 1));

// sort쓸 때 생으로 쓰지말자 제발