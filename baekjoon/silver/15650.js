function solution(N, M) {
  let ans = [];
  let tmp = Array.from({ length: M }, () => 0);
  function dfs(L, start) {
    if (L === M) {
      ans.push(tmp.slice());
    } else {
      for (let i = start; i <= N; i++) {
        tmp[L] = i;
        dfs(L + 1, i + 1);
      }
    }
  }
  dfs(0, 1);
  return ans;
}

console.log(solution(3, 1)); // [[1], [2], [3]]
console.log(solution(4, 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], {3, 1}, [3, 4]]
