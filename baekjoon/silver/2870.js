function solution(input) {
  let stack = [];
  for (let it of input) {
    let arr = it.match(/\d+/g);
    if (arr) stack.push(...arr);
  }
  stack.sort((a, b) => a - b);
  // 숫자가 최대 100글자인 조건이 존재하므로 BigInt로 변환한다.
  return stack.map(BigInt).join("\n");
}

console.log(solution(["lo3za4", "01"])); // [1, 3, 4]
console.log(solution(["43silos0", "zita002", "le2sim", "231233"])); // [0, 2, 2, 43, 231233]
