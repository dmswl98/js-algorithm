function solution(N, K) {
  let arr = Array.from({ length: N }, (v, i) => i + 1);
  let ans = [];
  while (arr.length) {
    for (let i = 0; i < K - 1; i++) {
      arr.push(arr.shift());
    }
    ans.push(arr.shift());
  }
  return `<${ans.join(", ")}>`;
}

console.log(solution(7, 3)); // <3, 6, 2, 7, 5, 1, 4>
