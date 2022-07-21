function solution(N, times) {
  let ordered = times.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      sum += ordered[j];
    }
  }
  return sum;
}
console.log(solution(5, [3, 1, 4, 3, 2])); // 32
