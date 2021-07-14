// correctness (33%)
// solution = (A) => {
//   const arr = [];
//   for (let i = 0; i < A.length; i++)
//     switch (A[i]) {
//       case ")":
//         if (arr[arr.length - 1] === "(") arr.pop();
//         else return 0;
//         break;
//       case "}":
//         if (arr[arr.length - 1] === "{") arr.pop();
//         else return 0;
//         break;
//       case "]":
//         if (arr[arr.length - 1] === "[") arr.pop();
//         else return 0;
//         break;
//       default:
//         arr.push(A[i]);
//     }
//   return 1;
// };
solution = (A) => {
  const arr = [];
  for (let i = 0; i < A.length; i++)
    switch (A[i]) {
      case ")":
        if (arr[arr.length - 1] === "(") arr.pop();
        else return 0;
        break;
      case "}":
        if (arr[arr.length - 1] === "{") arr.pop();
        else return 0;
        break;
      case "]":
        if (arr[arr.length - 1] === "[") arr.pop();
        else return 0;
        break;
      default:
        arr.push(A[i]);
    }
  return arr.length === 0 ? 1 : 0;
};

console.log(solution("{{{{"));

// 멍청이
