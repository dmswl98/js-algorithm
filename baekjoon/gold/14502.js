function solution(info, input) {
  let [N, M] = info.split(" ").map(Number);
  let board = input;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let max = 0;
  function countSafetyZone(arr) {
    let cnt = 0;
    let queue = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }
    // 바이러스 퍼트리기
    while (queue.length) {
      let [x, y] = queue.shift();
      for (let k = 0; k < dx.length; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0) {
          arr[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
    // 안전 구역 크기 세기
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] === 0) {
          cnt++;
        }
      }
    }
    return cnt;
  }
  function DFS(cnt) {
    // 3개의 벽 세우기
    if (cnt === 3) {
      // 2차원 배열 깊은 복사
      let arr = board.map((v) => [...v]);
      max = Math.max(max, countSafetyZone(arr));
      return;
    } else {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (board[i][j] === 0) {
            // 백트래킹
            board[i][j] = 1;
            DFS(cnt + 1);
            board[i][j] = 0;
          }
        }
      }
    }
  }
  DFS(0);
  return max;
}

console.log(
  solution("7 7", [
    [2, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 2, 0],
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
  ])
); // 27

console.log(
  solution("4 6", [
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 2],
    [1, 1, 1, 0, 0, 2],
    [0, 0, 0, 0, 0, 2],
  ])
); // 9
