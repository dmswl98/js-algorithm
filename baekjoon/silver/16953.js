function solution(start, end) {
  let queue = [[start, 1]];
  while (queue.length) {
    let [num, dis] = queue.shift();
    if (num === end) return dis;
    for (let next of [String(num) + "1", Number(num) * 2]) {
      let nextNum = Number(next);
      if (nextNum > start && nextNum <= end) {
        queue.push([nextNum, dis + 1]);
      }
    }
  }
  return -1;
}
console.log(solution(2, 162)); // 5
console.log(solution(4, 42)); // -1
console.log(solution(100, 40021)); // 5
