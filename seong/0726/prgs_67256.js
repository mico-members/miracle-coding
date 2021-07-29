const position = {
  1: { l: 0, r: 0 },
  2: { l: 0, r: 1 },
  3: { l: 0, r: 2 },
  4: { l: 1, r: 0 },
  5: { l: 1, r: 1 },
  6: { l: 1, r: 2 },
  7: { l: 2, r: 0 },
  8: { l: 2, r: 1 },
  9: { l: 2, r: 2 },
  '*': { l: 3, r: 0 },
  0: { l: 3, r: 1 },
  '#': { l: 3, r: 2 },
};
const solution = (numbers, hand) => {
  const getDis = (origin, target) => Math.abs(origin.l - target.l) + Math.abs(origin.r - target.r);

  let leftHand = { l: 3, r: 0 };
  let rightHand = { l: 3, r: 2 };

  const pushL = (location) => {
    answer.push('L');
    leftHand = location;
  };
  const pushR = (location) => {
    answer.push('R');
    rightHand = location;
  };

  const answer = [];

  numbers.forEach((el) => {
    if (position[el].r === 0) {
      pushL(position[el]);
    } else if (position[el].r === 2) {
      pushR(position[el]);
    } else {
      const leftDis = getDis(leftHand, position[el]);
      const rightDis = getDis(rightHand, position[el]);
      if (leftDis === rightDis) {
        hand === 'right' ? pushR(position[el]) : pushL(position[el]);
      } else if (leftDis < rightDis) {
        pushL(position[el]);
      } else {
        pushR(position[el]);
      }
    }
  });
  return answer.join('');
};

const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  bar = 'right';

console.log(solution(foo, bar));

// forEach대신에 map썼으면 좀더 세련됐을듯?
