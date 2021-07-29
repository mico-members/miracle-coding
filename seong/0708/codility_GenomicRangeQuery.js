const solution = (S, P, Q) => {
  const convert = (str) => {
    if (str.includes("A")) return 1;
    if (str.includes("C")) return 2;
    if (str.includes("G")) return 3;
    return 4;
  };
  return P.map((_, i) => S.substring(P[i], Q[i] + 1)).map((el) => convert(el));
};

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));

// O(N+M)