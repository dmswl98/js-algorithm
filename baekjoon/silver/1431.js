function solution(input) {
  input.sort((a, b) => {
    let aSum = 0,
      bSum = 0;
    if (a.length !== b.length) return a.length - b.length;
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) aSum += Number(a[i]);
      }
      for (let j = 0; j < b.length; j++) {
        if (!isNaN(b[j])) bSum += Number(b[j]);
      }
      if (aSum !== bSum) return aSum - bSum;
    }
    if (aSum === bSum) return a.localeCompare(b);
  });
  return input.join("\n");
}

console.log(solution(["ABCD", "145C", "A", "A910", "Z321"]));
// A
// ABCD
// Z321
// 145C
// A910

console.log(solution(["Z19", "Z20"]));
// Z20
// Z19

console.log(
  solution(["34H2BJS6N", "PIM12MD7RCOLWW09", "PYF1J14TF", "FIPJOTEA5"])
);
// FIPJOTEA5
// PYF1J14TF
// 34H2BJS6N
// PIM12MD7RCOLWW09

console.log(solution(["ABCDE", "BCDEF", "ABCDA", "BAAAA", "ACAAA"]));
// ABCDA
// ABCDE
// ACAAA
// BAAAA
// BCDEF
