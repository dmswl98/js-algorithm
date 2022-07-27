function solution(N, M, board) {
  let ans = 0;
  function bfs(i, j) {
    let max = 0;
    let queue = [[i, j]];
    // 상하좌우 탐색
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    // 방문 여부 배열을 생성해 각 출발점에서의 탐색 경로를 확인한다.
    let visited = Array.from({ length: N }, () => Array(M).fill(0));
    visited[i][j] = 1;
    while (queue.length) {
      let [x, y] = queue.shift();
      for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          board[nx][ny] === "L" &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
          // 출발점에서 도착지까지의 거리를 저장한다.
          max = Math.max(max, visited[nx][ny]);
        }
      }
    }
    // 출력 결과 확인하기
    console.log(max - 1, visited.slice());
    return max - 1;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "L") {
        // 각 출발점마다 bfs를 호출하여 출발점에서 가장 먼 도착지를 찾는다.
        ans = Math.max(ans, bfs(i, j));
      }
    }
  }
  return ans;
}
console.log(
  solution(5, 7, [
    ["W", "L", "L", "W", "W", "W", "L"],
    ["L", "L", "L", "W", "L", "L", "L"],
    ["L", "W", "L", "W", "L", "W", "W"],
    ["L", "W", "L", "W", "L", "L", "L"],
    ["W", "L", "L", "W", "L", "W", "W"],
  ])
);
