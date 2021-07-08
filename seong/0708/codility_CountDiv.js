const solution = (A, B, K) => {
  let AA = A;
  while (AA % K !== 0) AA++;
  let BB = B;
  while (BB % K !== 0) BB--;

  return (BB - AA) / K + 1;
};

console.log(solution(4, 12, 3000));
