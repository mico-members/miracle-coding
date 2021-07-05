// 시간복잡도 O(N**2) 효율성검사 탈락
// const solution = (A) => {
//   const answer = [...A.slice(1, A.length)].indexOf(A[0]);
//   return answer === -1 ? A[0] : solution([...A.slice(1, answer + 1), ...A.slice(answer + 2)]);
// };

const solution = (A) => {
  const answer = {};
  A.forEach((el) => (answer[el] ? delete answer[el] : (answer[el] = 1)));
  return parseInt(Object.keys(answer)[0]);
};

const foo = [1, 1, 3, 5, 5, 5, 3, 3, 5, 7, 7];
console.log(solution(foo));

// for문 안쓰려니까 머리 터지겠다
// 저렇게 [...A.slice(1, answer + 1), ...A.slice(answer + 2)]로 배열을 조립할때도 배열 전체를 순회할까
// delete로 객체의 속성 지워버리는 데 얼마나 시간이 들까?
