let input = "7 1 2 3 4 5 6 7\n8 1 2 3 5 8 13 21 34\n0".trim().split("\n");
let res = "";
for (let i = 0; i < input.length - 1; i++) {
  let [N, ...arr] = input[i].split(" ").map(Number);
  res += `${solution(N, arr).join("\n")}`;
  if (i < input.length - 2) res += "\n\n";
}
function solution(N, input) {
  let ans = new Set();
  let visited = Array.from({ length: N }, () => 0);
  let tmp = [];
  function dfs(L) {
    if (L === 6) {
      let sorted = tmp.slice().sort((a, b) => a - b);
      ans.add(sorted.join(" "));
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (visited[i] === 0) {
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
  return [...ans];
}
console.log(res);
