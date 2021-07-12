solution = (A) => {
  const arr = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 2; i++) if (arr[i] + arr[i + 1] > arr[i + 2]) return 1;
  return 0;
};
const test = [1, 2, 3];
console.log(solution(test));

// O(N*log(N))