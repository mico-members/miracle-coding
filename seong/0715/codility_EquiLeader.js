// perfomance(0%) ㄷㄷㄷㄷㄷ N^2
// solution = (A) => {
//   const left = [];
//   const right = [...A];
//   let count = 0;

//   const getDominator = (arr) => {
//     const counts = {};
//     let dominator = 0;
//     for (let i = 0; i < arr.length; i++) {
//       counts[arr[i]] ? counts[arr[i]]++ : (counts[arr[i]] = 1);
//       dominator = counts[dominator] > counts[arr[i]] ? dominator : arr[i];
//     }
//     return counts[dominator] > arr.length / 2 ? dominator : false;
//   };

//   for (let i = 0; i < A.length; i++) {
//     left.push(right.shift());
//     const l = getDominator(left);
//     const r = getDominator(right);
//     if (l !== false && r !== false && l === r) count++;
//   }

//   return count;
// };

solution = (A) => {
  const left = {};
  const right = {};
  let count = 0;
  let leftLeader;

  for (let i = 0; i < A.length; i++) right[A[i]] ? right[A[i]]++ : (right[A[i]] = 1);

  for (let i = 0; i < A.length; i++) {
    right[A[i]]--;
    left[A[i]] ? left[A[i]]++ : (left[A[i]] = 1);
    leftLeader = left[leftLeader] > left[A[i]] ? leftLeader : A[i];
    if (left[leftLeader] > (i + 1) / 2) if (right[leftLeader] > (A.length - i - 1) / 2) count++;
  }

  return count;
};

const foo = [4, 4, 2, 5, 3, 4, 4, 4];
console.log(solution(foo));
