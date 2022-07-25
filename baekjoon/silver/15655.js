function solution(N, M, input) {
  input.sort((a, b) => a - b);
  let tmp = [];
  let ans = "";
  function dfs(L, start) {
    if (L === M) {
      ans += `${tmp.slice().join(" ")}\n`;
    } else {
      for (let i = start; i < N; i++) {
        tmp.push(input[i]);
        dfs(L + 1, i + 1);
        tmp.pop();
      }
    }
  }
  dfs(0, 0);
  return ans;
}

console.log(solution(3, 1, [4, 5, 2])); // [2, 4, 5]
console.log(solution(4, 2, [9, 8, 7, 1])); // [[1, 7], [1, 8], [1, 9], [7, 8], [7, 9], [8, 9]]
