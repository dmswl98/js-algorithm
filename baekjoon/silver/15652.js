function solution(N, M) {
  let ans = "";
  let tmp = Array.from({ length: M }, () => 0);
  function dfs(L, start) {
    if (L === M) {
      ans += `${tmp.slice().join(" ")}\n`;
    } else {
      for (let i = start; i <= N; i++) {
        tmp[L] = i;
        dfs(L + 1, i);
      }
    }
  }
  dfs(0, 1);
  return ans;
}

console.log(solution(3, 1)); // [[1], [2], [3]]
console.log(solution(4, 2)); // [[1, 1], [1, 2], [1, 3], [1, 4], [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4]]
