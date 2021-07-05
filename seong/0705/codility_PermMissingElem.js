// 런타임에러 5개(20%)
// const solution = (A) => {
//   const obj = { ...Array.from({ length: A.length + 1 }) };
//   A.forEach((el) => delete obj[el]);
//   return parseInt(Object.keys(obj)[1]);
// };

const solution = (A) => {
  const obj = { ...Array.from({ length: A.length + 1 }) };
  A.forEach((el) => delete obj[el - 1]);
  return parseInt(...Object.keys(obj)) + 1;
};

console.log(solution([7, 2, 3, 4, 5, 6]));

// includes는 배열전체를 순회할테니 O^2 : 포기!
// 제출시 시간복잡도는 O(N) or O(N * log(N))
// A.forEach가 N일테고, log(N)은 뭘까
// Array.from으로 생성할 때? 객체에다 ...로 펼쳐서 줄 때?
// 아니면 forEach안의 delete부분을 코딜리티가 의심해서?