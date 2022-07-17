function solution(N, input) {
  let [startX, startY, endX, endY] = input.split(" ").map(Number);
  let dx = [-2, -2, 0, 0, 2, 2];
  let dy = [-1, 1, -2, 2, -1, 1];
  let arr = Array.from({ length: N }, () => Array(N).fill(0));
  let queue = [];
  arr[startX][startY] = 1;
  queue.push([startX, startY]);
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && arr[nx][ny] === 0) {
        arr[nx][ny] = arr[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return arr[endX][endY] - 1;
}

console.log(solution(7, "6 6 0 1")); // 4
console.log(solution(6, "5 1 0 5")); // -1
console.log(solution(7, "0 3 4 3")); // 2
