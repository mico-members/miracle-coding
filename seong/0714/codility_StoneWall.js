solution = (A) => {
  const arr = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (arr.length === 0 || arr[arr.length - 1] < A[i]) {
      arr.push(A[i]);
      count++;
    } else {
      while (true) {
        if (arr.length === 0) {
          arr.push(A[i]);
          count++;
          break;
        }
        if (arr[arr.length - 1] > A[i]) arr.pop();
        else if (arr[arr.length - 1] < A[i]) {
          arr.push(A[i]);
          count++;
          break;
        } else break;
      }
    }
  }
  return count;
};
const foo = [8, 8, 5, 7, 9, 8, 7, 4, 8];
console.log(solution(foo));

// 0: 8넣음 [8]
// 1: 8  8===8 안넣음 [8]
// 2: 5  (5<8) 넣음 [5] / 분리
// 3: 7  (7>5) 넣음 [5,7]
// 4: 9  (9>7) 넣음 [5,7,9]
// 5: 8  (8<9 , 8>7) 넣음 [5,7,8] / 분리?
// 6: 7  ()

// [...a].push(b)
// a<b 면 그냥 쌓는다, count도 ++
// a>b 면 pop반복, ===원소 만나면 정지, a<b 되는 순간 count++, push

//쉬운풀이?도 찾아 볼 것
