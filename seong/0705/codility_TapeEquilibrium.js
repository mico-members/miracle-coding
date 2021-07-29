// 당연히 O(N^2) ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 양심도 없지 이걸 제출하네
// const solution = (A) => {
//   let min;
//   for (let i = 1; i < A.length; i++) {
//     const diff = Math.abs(
//       A.slice(0, i).reduce((acc, cur) => acc + cur) - A.slice(i).reduce((acc, cur) => acc + cur)
//     );
//     min = min < diff ? min : diff;
//   }
//   return min;
// };

// 조건 항상 다시 읽는 습관 Correntness(71%)
// const solution = (A) => {
//   let min;
//   let left = 0;
//   let right = A.reduce((acc,cur)=>acc+cur);
//   A.forEach((el)=>{
//     left += el
//     right -= el
//     diff = Math.abs(left-right)
//     min = min < diff ? min : diff
//   })
//   return min;
// };

// ;;; correctness(28%)
// const solution = (A) => {
//   let min;
//   let left = 0;
//   let right = A.reduce((acc, cur) => acc + cur);
//   A.forEach((el, i) => {
//     if (i === 0) return;
//     left += el;
//     right -= el;
//     diff = Math.abs(left - right);
//     min = min < diff ? min : diff;
//   });
//   return min;
// };

const solution = (A) => {
  let min;
  let left = 0;
  let right = A.reduce((acc, cur) => acc + cur);
  A.forEach((el, i) => {
    if (i === A.length - 1) return;
    left += el;
    right -= el;
    diff = Math.abs(left - right);
    min = min < diff ? min : diff;
  });
  return min;
};

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([-1000, 1000]));

// reduce를 분리해라! 아니면 log N까지 내리던가!
// 실수 쌉오졌다 여러 번 복습할 것!
