solution = (A) => {
  const arr = A.sort((a, b) => a - b);
  return Math.max(
    arr[0] * arr[1] * arr[arr.length - 1],
    arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]
  );
};
console.log(solution([1, 2, 3, -4, -5, -6]));

// 셋 다 양수  + + + sort((a,b)=>a-b)
// 둘 만 음수  - - +

// O(N*log(N))