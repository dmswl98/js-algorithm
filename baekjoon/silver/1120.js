function solution(A, B) {
  let aLen = A.length;
  let bLen = B.length;
  let min = 51;
  for (let i = 0; i < bLen - aLen + 1; i++) {
    let target = B.substr(i, aLen);
    let cnt = 0;
    for (let j = 0; j < aLen; j++) {
      if (target[j] !== A[j]) cnt++;
    }
    min = Math.min(min, cnt);
  }
  return min;
}

console.log(solution("adaabc", "aababbc")); // 2
console.log(solution("hello", "xello")); // 1
console.log(solution("koder", "topcoder")); // 1
console.log(solution("abc", "topabcoder")); // 0
console.log(solution("giorgi", "igroig")); // 6
