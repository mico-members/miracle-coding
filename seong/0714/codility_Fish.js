solution = (A, B) => {
  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 0 && arr.length > 0) {
      while (true) {
        if (arr.length === 0 || arr[arr.length - 1][1] === 0) {
          arr.push([A[i], B[i]]);
          break;
        } else {
          if (arr[arr.length - 1][0] < A[i]) arr.pop();
          else break;
        }
      }
    } else arr.push([A[i], B[i]]);
  }
  return arr.length;
};

const A = [4, 3, 2, 1, 5];
const B = [1, 0, 0, 0, 0];
console.log(solution(A, B));

// 0물고기는 arr안에 1물고기를 다 잡아먹는다 0물고기를 만날때까지
// arr안의 0물고기는 사실상 은퇴
// 1물고기는 arr안으로 바로 들어간다
// arr안에서 1물고기는 오는 0물고기마다 시비턴다

// arr안의 1과 들어오는 0이 싸울 때
// 1이 이기면 push안하고 순회 진행
// 0이 이기면 pop하고 다음타자랑 싸움, 0만날때 까지 반복

// 구조가 너무 복잡한데 수정할 방법 고안할 것