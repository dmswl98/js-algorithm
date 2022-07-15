function valid(str) {
  // 모음 하나를 반드시 포함해야 한다.
  let vow = str.match(/[aeiou]/g);
  // 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
  let duplicateVow = str.match(/[aeiou]{3}/g);
  let duplicateCon = str.match(/[^aeiou]{3}/g);
  // '같은' 글자가 연속적으로 두 번 오면 안되나, ee와 oo는 허용한다.
  let duplicate = str.match(/(\w)\1/g);
  let flag = true;
  if (duplicate && duplicate.length) {
    let rule = duplicate.filter((v) => v !== "ee" && v !== "oo").length;
    if (rule) flag = false;
  }
  if (vow && !duplicateVow && !duplicateCon && flag) return true;
  return false;
}

function solution(input) {
  for (let i = 0; i < input.length - 1; i++) {
    if (valid(input[i])) console.log(`<${input[i]}> is acceptable.`);
    else console.log(`<${input[i]}> is not acceptable.`);
  }
}

solution([
  "a",
  "tv",
  "ptoui",
  "bontres",
  "zoggax",
  "wiinq",
  "eep",
  "houctuh",
  "end",
]);

// <a> is acceptable.
// <tv> is not acceptable.
// <ptoui> is not acceptable.
// <bontres> is not acceptable.
// <zoggax> is not acceptable.
// <wiinq> is not acceptable.
// <eep> is acceptable.
// <houctuh> is acceptable.
