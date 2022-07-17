function solution(input) {
  let [str, target] = input.toString().trim().split("\n");
  let cnt = 0;
  let idx = 0;
  while (idx < str.length) {
    let found = str.indexOf(target, idx);
    if (found > -1) {
      idx = found + target.length;
      cnt++;
    } else break;
  }
  return cnt;
}

console.log(solution("ababababa\naba")); // 2
console.log(solution("a a a a a\na a")); // 2
console.log(solution("ababababa\nababa")); // 1
console.log(solution("aaaaaaa\naa")); // 3
