// 런타임에러 (75%)
// const solution = (A, K) => A.map((_, i) => A[(A.length + i - K) % A.length]);

const solution = (A, K) => A.map((_, i) => A[(A.length + i - (K % A.length)) % A.length]);