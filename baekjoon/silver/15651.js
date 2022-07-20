function solution(N, M) {
  let ans = "";
  let tmp = Array.from({ length: M }, () => 0);
  function dfs(L) {
    if (L === M) {
      ans += `${tmp.slice().join(" ")}\n`;
    } else {
      for (let i = 1; i <= N; i++) {
        tmp[L] = i;
        dfs(L + 1);
      }
    }
  }
  dfs(0);
  return ans;
}

console.log(solution(3, 1)); // [[1], [2], [3]]
console.log(solution(4, 2)); // [[1, 1], [1, 2], [1, 3], [1, 4], [2, 1], [2, 2], [2, 3], [2, 4], {3, 1}, [3, 2], [3, 3], [3, 4], [4, 1], [4, 2], [4, 3], [4, 4]]
