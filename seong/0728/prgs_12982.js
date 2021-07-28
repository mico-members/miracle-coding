const solution = (d, budget) => {
  const newArr = [...d.sort((a, b) => a - b)]; // n
  let count = 0;
  for (let i = 0; i < d.length; i++) {
    budget -= newArr.shift();
    if (budget < 0) return count;
    count++;
  }

  return count;
};

const foo = [2, 2, 3, 3],
  bar = 10;

console.log(solution(foo, bar));
