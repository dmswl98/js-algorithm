function solution(input) {
  let stu = input.map((v) => v.split(" "));
  stu.sort((a, b) => {
    if (a[1] !== b[1]) return Number(b[1]) - Number(a[1]);
    if (a[2] !== b[2]) return Number(a[2]) - Number(b[2]);
    if (a[3] !== b[3]) return Number(b[3]) - Number(a[3]);
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
  });
  let ans = stu.map((v) => v[0]);
  return ans.join("\n");
}

console.log(
  solution([
    "Junkyu 50 60 100",
    "Sangkeun 80 60 50",
    "Sunyoung 80 70 100",
    "Soong 50 60 90",
    "Haebin 50 60 100",
    "Kangsoo 60 80 100",
    "Donghyuk 80 60 100",
    "Sei 70 70 70",
    "Wonseob 70 70 90",
    "Sanghyun 70 70 80",
    "nsj 80 80 80",
    "Taewhan 50 60 90",
  ])
);

// [
//   "Donghyuk",
//   "Sangkeun",
//   "Sunyoung",
//   "nsj",
//   "Wonseob",
//   "Sanghyun",
//   "Sei",
//   "Kangsoo",
//   "Haebin",
//   "Junkyu",
//   "Soong",
//   "Taewhan",
// ];
