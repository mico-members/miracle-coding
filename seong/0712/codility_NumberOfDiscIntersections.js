// Performance(62%)  O(N^2)
// solution = (A) => {
//   const arr = A.map((v, i) => [i - v, i + v]);
//   let count = 0;
//   const check = (arr1, arr2) => {
//     if (
//       (arr1[0] <= arr2[0] && arr2[0] <= arr1[1]) ||
//       arr1[1] === arr2[0] ||
//       (arr1[0] <= arr2[0] && arr2[0] <= arr1[1]) ||
//       (arr2[0] <= arr1[0] && arr1[1] <= arr2[0])
//     )
//       count++;
//   };

//   arr.forEach((el, index) => {
//     for (let i = index + 1; i < arr.length; i++) check(el, arr[i]);
//   });
//   return count;
// };

// Performance(37%)  O(N^2) 왜줄어들었지?????
// solution = (A) => {
//   const arr = A.map((v, i) => [i - v, i + v]);
//   let count = 0;
//   const check = (arr1, arr2) =>
//     (arr1[0] <= arr2[0] && arr2[0] <= arr1[1]) ||
//     arr1[1] === arr2[0] ||
//     (arr1[0] <= arr2[0] && arr2[0] <= arr1[1]) ||
//     (arr2[0] <= arr1[0] && arr1[1] <= arr2[0]);

//   for (let i = 0; i < arr.length; i++)
//     for (let j = i + 1; j < arr.length; j++) {
//       if (check(arr[i], arr[j])) count++;
//       if (count > 10000000) return -1;
//     }
//   return count;
// };

// Performance(62%) O(N*log(N)) or O(N) or O(N**2)
// solution = (A) => {
//   const arr = [];
//   let count = 0;
//   const check = (id1, rad1, id2, rad2) => {
//     if (
//       ((id1-rad1) <= (id2-rad2) && (id2-rad2) <= (id1+rad1)) ||
//       ((id1-rad1) <= (id2-rad2) && (id2+rad2) <= (id1+rad1)) ||
//       ((id2-rad2) <= (id1-rad1) && (id1+rad1) <= (id2+rad2))
//     )
//       count++;
//   };
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < i; j++) check(j, arr[j], i, A[i]);
//     arr.push(A[i]);
//     if (count > 10000000) return -1;
//   }

//   return count;
// };

//https://velog.io/@dosanahnchangho/%EC%BD%94%EB%94%9C%EB%A6%AC%ED%8B%B0-NumberOfDiscIntersections-JavaScript
function solution(A) {
  let result = 0;
  const discs = A.map((n, i) => [i - n, i + n]);

  discs.sort((a, b) => a[0] - b[0]);

  for (let j = 0; j < A.length; j++) {
    for (let i = j + 1; i < A.length; i++) {
      if (discs[i][0] <= discs[j][1]) {
        ++result;
      } else {
        break;
      }
      if (result > 10000000) return -1;
    }
  }

  return result;
}

const test = [1, 5, 2, 1, 4, 0];

console.log(solution(test));

// [
//   [-1, 1],
//   [-4, 6],
//   [0, 4],
//   [2, 4],
//   [0, 8],
//   [5, 5],
// ];

// 1. 2점 el i[0] el
// 2. 1점 el[1] = i[0]
// 3. 포함함 el i i el
// 4. 포함당함 i el el i
