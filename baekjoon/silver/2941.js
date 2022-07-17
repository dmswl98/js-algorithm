function solution(input) {
  const regex = /c=|c-|dz=|d-|lj|nj|s=|z=/g;
  let ans = input.replace(regex, "0");
  return ans.length;
}

console.log(solution("ljes=njak")); // 6
console.log(solution("ddz=z=")); // 3
console.log(solution("c=c=")); // 2
console.log(solution("dz=ak")); // 3
