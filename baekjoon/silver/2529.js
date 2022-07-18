function solution(K, input) {
  let arr = input.split(" ");
  let visited = Array.from({ length: 10 }, () => 0);
  let ans = [];
  let max = String(Number.MIN_SAFE_INTEGER);
  let min = String(Number.MAX_SAFE_INTEGER);
  function DFS(L, prev, ans) {
    if (L === K) {
      max = ans > max ? ans : max;
      min = ans < min ? ans : min;
      return;
    }
    if (arr[L] === "<") {
      for (let i = prev + 1; i < 10; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          DFS(L + 1, i, ans + i);
          visited[i] = 0;
        }
      }
    } else {
      for (let i = prev - 1; i >= 0; i--) {
        if (visited[i] === 0) {
          visited[i] = 1;
          DFS(L + 1, i, ans + i);
          visited[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < visited.length; i++) {
    visited[i] = 1;
    DFS(0, i, `${i}`);
    visited[i] = 0;
  }
  ans.push(max, min);
  return ans;
}

console.log(solution(2, "< >")); // [897, 021]
console.log(solution(9, "> < < < > > > < <")); // [9567843012, 1023765489]
