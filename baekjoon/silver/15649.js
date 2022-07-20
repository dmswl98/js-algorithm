function solution(N, M) {
  let ans = [];
  let ch = Array.from({ length: N + 1 }, () => 0);
  let tmp = [];
  function dfs(L) {
    if (L === M) {
      ans.push(tmp.slice());
    } else {
      for (let i = 1; i <= N; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(i);
          dfs(L + 1);
          tmp.pop();
          ch[i] = 0;
        }
      }
    }
  }
  dfs(0);
  return ans;
}

console.log(solution(3, 1)); // [[1], [2], [3]]
console.log(solution(4, 2)); // [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 4], {3, 1}, [3, 2], [3, 4], [4, 1], [4, 2], [4, 3]]
