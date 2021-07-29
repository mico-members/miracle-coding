// O(N*M)  perfomance(40%)
// const solution = (N, A) => {
//   let answer = Array.from({ length: N }, () => 0);
//   let max = 0;
//   A.forEach((el) =>
//     el <= N
//       ? (answer[el - 1]++, (max = max > answer[el - 1] ? max : answer[el - 1]))
//       : (answer = Array.from({ length: N }, () => max))
//   );
//   return answer;
// };

// O(N+M)  perfomance(80%)
// const solution = (N, A) => {
//   let answer = new Array(N);
//   let sumMax = 0;
//   let max = 0;
//   A.forEach((el) => {
//     if (el <= N) {
//       answer[el - 1] ? answer[el - 1]++ : (answer[el - 1] = 1);
//       max = max > answer[el - 1] ? max : answer[el - 1];
//     } else {
//       sumMax += max;
//       max = 0;
//       answer = new Array(N);
//     }
//   });
//   return Array.from({ length: N }, () => sumMax).map((el, i) => (answer[i] ? el + answer[i] : el));
// };

// 참고 https://poltman.tistory.com/78
// 같은 O(N+M)인데 왜 차이날까
const solution = (N, A) => {
  const answer = Array.from({ length: N }, () => 0);
  let sumMax = 0;
  let max = 0;
  A.forEach((el) => {
    if (el <= N) {
      answer[el - 1] = answer[el - 1] < sumMax ? sumMax + 1 : answer[el - 1] + 1;
      max = max < answer[el - 1] ? answer[el - 1] : max;
    } else {
      sumMax = max;
    }
  });
  return answer.map((el) => (el < sumMax ? sumMax : el));
};

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(5, [3, 4, 4, 6, 1, 4, 6, 1, 1, 1, 1, 2, 1, 4, 6, 1, 1, 2, 3, 6, 4, 1, 2]));

// 같은 O(N+M)인데 왜 결과가 차이날까
// 