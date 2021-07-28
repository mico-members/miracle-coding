const solution = (n, arr1, arr2) => {
  const makeMap = (el) => {
    let wall = el.toString(2);
    while (wall.length < n) wall = '0' + wall;
    return wall;
  };
  const mixMap = (m1, m2) => {
    const mixedMap = [];
    for (let i = 0; i < n; i++) {
      let wall = '';
      for (let j = 0; j < n; j++) wall += m1[i][j] === '1' || m2[i][j] === '1' ? '#' : ' ';
      mixedMap.push(wall);
    }
    return mixedMap;
  };
  return mixMap(arr1.map(makeMap), arr2.map(makeMap));
};

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];
console.log(solution(n, arr1, arr2));
