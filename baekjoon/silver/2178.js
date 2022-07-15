function solution(size, input) {
  let [xLen, yLen] = size.split(" ").map(Number);
  let table = input.split("\n").map((v) => v.split("").map(Number));
  let queue = [];
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  queue.push([0, 0]);
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let k = 0; k < dx.length; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < xLen && ny >= 0 && ny < yLen && table[nx][ny] === 1) {
        // 테이블 요소에 거리 정보를 기록한다.
        table[nx][ny] = table[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  console.log(table);
  return table[xLen - 1][yLen - 1];
}

console.log(solution("4 6", "101111\n101010\n101011\n111011")); // 15
console.log(solution("4 6", "110110\n110110\n111111\n111101")); // 9
