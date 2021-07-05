// 멍청
// const solution = (X, Y, D) => Math.floor((Y - X) / D) + 1;

const solution = (X, Y, D) => Math.ceil((Y - X) / D);

console.log(solution(1,5,2));

// 멍청했다
// 멍청한 건 둘째치고 이게 왜 시간복잡도 항목에 있을까
// C같은 데선 이렇게 못푸나?