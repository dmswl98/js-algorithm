let input =
  "1 1\n0\n2 2\n0 1\n1 0\n3 2\n1 1 1\n1 1 1\n5 4\n1 0 1 0 0\n1 0 0 0 0\n1 0 1 0 1\n1 0 0 1 0\n5 4\n1 1 1 0 1\n1 0 1 0 1\n1 0 1 0 1\n1 0 1 1 1\n5 5\n1 0 1 0 1\n0 0 0 0 0\n1 0 1 0 1\n0 0 0 0 0\n1 0 1 0 1\n0 0"
    .toString()
    .trim()
    .split("\n");
while (input.length > 1) {
  let [N, M] = input.shift().split(" ").map(Number);
  let graph = input.splice(0, M);
  console.log(solution(N, M, graph));
}
function solution(N, M, graph) {
  let cnt = 0;
  let mapGraph = graph.map((v) => v.split(" ").map(Number));
  let dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  let dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  function dfs(x, y) {
    mapGraph[x][y] = 0;
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && mapGraph[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (mapGraph[i][j] === 1) {
        cnt++;
        dfs(i, j);
      }
    }
  }
  return cnt;
}

// 0
// 1
// 1
// 3
// 1
// 9
