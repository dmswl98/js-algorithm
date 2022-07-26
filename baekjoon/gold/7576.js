function getDay(box, N, M) {
  let res = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (box[i][j] === 0) return -1;
      res = Math.max(res, box[i][j]);
    }
  }
  return res - 1;
}
function solution(info, input) {
  let [N, M] = info.split(" ").map(Number);
  let graph = input.split("\n").map((v) => v.split(" ").map(Number));
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1) queue.push([i, j]);
    }
  }
  let idx = 0;
  while (queue.length !== idx) {
    let [x, y] = queue[idx];
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && graph[nx][ny] === 0) {
        queue.push([nx, ny]);
        graph[nx][ny] = graph[x][y] + 1;
      }
    }
    idx++;
  }
  let ans = getDay(graph, N, M);
  console.log(ans);
}
solution("6 4", "0 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 1"); // 8
solution("6 4", "0 -1 0 0 0 0\n-1 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 1"); // -1
solution("6 4", "1 -1 0 0 0 0\n0 -1 0 0 0 0\n0 0 0 0 -1 0\n0 0 0 0 -1 1"); // 6
solution(
  "5 5",
  "-1 1 0 0 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 0 0 0 0"
); // 14
solution("2 2", "1 -1\n-1 1"); // 0
