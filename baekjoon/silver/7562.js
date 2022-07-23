function solution(input) {
  let [N, ...target] = input.toString().trim().split("\n");
  for (let i = 0; i < +N; i++) {
    let I = Number(target.shift());
    let start = target.shift().split(" ").map(Number);
    let end = target.shift().split(" ").map(Number);
    console.log(bfs(I, start, end));
  }
}

function bfs(I, start, end) {
  let [endX, endY] = end;
  let graph = Array.from({ length: I }, () => Array(I).fill(0));
  graph[start[0]][start[1]] = 1;
  let queue = [start];
  let dx = [-1, -2, -2, -1, 1, 2, 2, 1];
  let dy = [-2, -1, 1, 2, 2, 1, -1, -2];
  while (queue.length) {
    let [x, y] = queue.shift();
    if (x === endX && y === endY) break;
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < I && ny >= 0 && ny < I && graph[nx][ny] === 0) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return graph[endX][endY] - 1;
}

solution("3\n8\n0 0\n7 0\n100\n0 0\n30 50\n10\n1 1\n1 1"); // [5, 28, 0]
