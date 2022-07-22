function solution(N, M, input) {
  input = input.sort((a, b) => a - b);
  let ans = "";
  let visited = Array.from({ length: M }, () => 0);
  let tmp = [];
  function dfs(L) {
    if (L === M) {
      ans += `${tmp.slice().join(" ")}\n`;
    } else {
      for (let i = 0; i < N; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          tmp.push(input[i]);
          dfs(L + 1);
          tmp.pop();
          visited[i] = 0;
        }
      }
    }
  }
  dfs(0);
  return ans;
}

console.log(solution(3, 1, [4, 5, 2])); // [2, 4, 5]
console.log(solution(4, 2, [9, 8, 7, 1])); // [[1, 7], [1, 8], [1, 9], [7, 1], [7, 8], [7, 9], [8, 1], [8, 7], [8, 9], [9, 1], [9, 7], [9, 8]]
