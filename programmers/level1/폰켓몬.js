function solution(nums) {
  const cnt = Math.floor(nums.length / 2);
  const set = [...new Set(nums)];
  if (set.length < cnt) return set.length;
  else return cnt;
}
console.log(solution([3, 1, 2, 3], 2)); // 2
