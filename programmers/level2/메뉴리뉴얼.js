function solution(orders, course) {
  const obj = {};
  function getCombi(tmp, order, cnt, lev, start) {
    // 재귀 함수를 이용해 조합 경우의 수를 구함
    if (lev === cnt) {
      let str = tmp.slice().sort().join("");
      obj[str] = (obj[str] || 0) + 1;
    } else {
      for (let i = start; i < order.length; i++) {
        tmp[lev] = order[i];
        getCombi(tmp, order, cnt, lev + 1, i + 1);
      }
    }
  }
  orders.forEach((order) => {
    course.forEach((cnt) => {
      let tmp = Array.from({ length: cnt }, () => "0");
      getCombi(tmp, order, cnt, 0, 0);
    });
  });

  let menu = [...Object.entries(obj)]
    .filter((v) => v[1] >= 2)
    .sort((a, b) => a[0] - b[0]);

  let ans = [];
  course.forEach((cnt) => {
    let sorted = menu
      .filter((v) => v[0].length === cnt)
      .sort((a, b) => b[1] - a[1]);
    let max = 0;
    sorted.forEach((v) => {
      if (v[1] >= max) {
        max = v[1];
        ans.push(v[0]);
      }
    });
  });
  return ans.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]
