const collection = ["a", "e", "i", "o", "u"];
function solution(pwdLen, inputLen, input) {
  let ans = new Set();
  function dfs(L, str) {
    if (str.length === pwdLen) {
      let sortedStr = str.split("").sort();
      let collectionLen = sortedStr.filter((v) =>
        collection.includes(v)
      ).length;
      let vowelLen = sortedStr.length - collectionLen;
      if (collectionLen >= 1 && vowelLen >= 2) {
        ans.add(sortedStr.join(""));
      }
    } else {
      for (let i = L; i < inputLen; i++) {
        dfs(i + 1, str + input[i]);
      }
    }
  }
  dfs(0, "");
  let res = [...ans];
  res.sort((a, b) => a.localeCompare(b));
  return res.join("\n");
}
console.log(solution(4, 6, ["a", "t", "c", "i", "s", "w"]));
