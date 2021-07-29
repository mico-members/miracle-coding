const solution = (N, stages) => {
  const fail = stages.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  const total = {};
  let lastTotal = stages.length;

  for (let i = 1; i <= N; i++) {
    total[i] = lastTotal;
    if (fail[i] > 0) lastTotal -= fail[i];
  }
  const getRate = (i) => (fail[i] ? fail[i] : 0) / total[i];

  return Array.from({ length: N }, (_, i) => i + 1).sort((a, b) => getRate(b) - getRate(a));
};

const foo = 4;
const bar = [4, 4, 4, 4, 4];

console.log(solution(foo, bar));
