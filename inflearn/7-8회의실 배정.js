function solution(meeting) {
  let cnt = 0;
  meeting.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let target = 0;
  for (let it of meeting) {
    if (it[0] >= target) {
      cnt++;
      target = it[1];
    }
  }
  return cnt;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
