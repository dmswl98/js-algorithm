function solution(N, nums) {
  let arr = [];
  let ch = Array.from({ length: N }, () => 0);
  let max = 0;
  function DFS(L) {
    // 수열의 모든 배치를 구해 최대 차를 구한다.
    if (L === N) {
      let tmp = arr.slice();
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(tmp[i] - tmp[i + 1]);
      }
      max = Math.max(max, sum);
    } else {
      for (let i = 0; i < N; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          arr.push(nums[i]);
          DFS(L + 1);
          arr.pop();
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return max;
}

console.log(solution(6, [20, 1, 15, 8, 4, 10])); // 62
