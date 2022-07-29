const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(R, C, table) {
  let visited = Array.from({ length: 26 }, () => 0);
  let max = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function dfs(x, y, cnt) {
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
        let idx = alphabet.indexOf(table[nx][ny]);
        if (!visited[idx]) {
          visited[idx] = 1;
          dfs(nx, ny, cnt + 1);
          visited[idx] = 0;
        } else {
          max = Math.max(max, cnt);
        }
      }
    }
  }
  let idx = alphabet.indexOf(table[0][0]);
  visited[idx] = 1;
  dfs(0, 0, 1);
  return max;
}

console.log(
  solution(2, 4, [
    ["C", "A", "A", "B"],
    ["A", "D", "C", "B"],
  ])
); // 3

console.log(
  solution(3, 6, [
    ["H", "F", "D", "F", "F", "B"],
    ["A", "J", "H", "G", "D", "H"],
    ["D", "G", "A", "G", "E", "H"],
  ])
); // 6

console.log(
  solution(5, 5, [
    ["I", "E", "F", "C", "J"],
    ["F", "H", "F", "K", "C"],
    ["F", "F", "A", "L", "F"],
    ["H", "F", "G", "C", "F"],
    ["H", "M", "C", "H", "H"],
  ])
); // 10
