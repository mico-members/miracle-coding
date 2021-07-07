const solution = (A) => {
  const record = {};
  A.forEach((el) => (record[el] = true));
  let count = 0;
  while (count <= 100000) if (!record[++count]) return count;
};

const test = solution([-1, -3]);
console.log(test);

// O(N) or O(N * log(N))
// 아마 2N일테고, N*log(N)은 어디를 의심하는 걸까
