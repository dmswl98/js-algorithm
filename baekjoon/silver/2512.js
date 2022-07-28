function solution(N, total, budget) {
  budget.sort((a, b) => a - b);
  let lt = 0;
  let rt = budget[N - 1];
  let ans = 0;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (budget[i] >= mid) sum += mid;
      else sum += budget[i];
    }
    if (sum <= total) {
      if (mid > ans) ans = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return ans;
}

console.log(solution(4, 485, [120, 110, 140, 150])); // 127
console.log(solution(5, 450, [70, 80, 30, 40, 100])); // 100
