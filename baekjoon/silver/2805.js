function solution(N, len, input) {
  let arr = input.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr[arr.length - 1];
  let ans = 0;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (arr[i] > mid) sum += arr[i] - mid;
    }
    if (sum >= len) {
      if (mid > ans) ans = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return ans;
}

console.log(solution(4, 7, [20, 15, 10, 17])); // 15
console.log(solution(5, 20, [4, 42, 40, 26, 46])); // 36
