function solution(input) {
  let set = new Set();
  for (let i = 0; i < input.length; i++) {
    let str = "";
    for (let j = i; j < input.length; j++) {
      str += input[j];
      set.add(str);
    }
  }
  return set.size;
}
console.log(solution("ababc")); // 12
