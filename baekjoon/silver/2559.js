function solution(K, arr) {
  let ans = [];
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (rt - lt === K - 1) {
      ans.push(sum);
      sum -= arr[lt++];
    }
  }
  return Math.max(...ans);
}

console.log(solution(2, [3, -2, -4, -9, 0, 3, 7, 13, 8, -3]));
