function solution(input) {
  input = input.trim().split("\n");
  let obj = {};
  for (let str of input) {
    obj[str] = (obj[str] || 0) + 1;
  }
  input.sort();
  let set = [...new Set(input)];
  let ans = "";
  let len = input.length;
  for (let str of set) {
    ans += `${str} ${((obj[str] / len) * 100).toFixed(4)}\n`;
  }
  return ans;
}

console.log(
  solution(
    "Red Alder\nAsh\nAspen\nBasswood\nAsh\nBeech\nYellow Birch\nAsh\nCherry\nCottonwood\nAsh\nCypress\nRed Elm\nGum\nHackberry\nWhite Oak\nHickory\nPecan\nHard Maple\nWhite Oak\nSoft Maple\nRed Oak\nRed Oak\nWhite Oak\nPoplan\nSassafras\nSycamore\nBlack Walnut\nWillow"
  )
);
// Ash 13.7931
// Aspen 3.4483
// Basswood 3.4483
// Beech 3.4483
// Black Walnut 3.4483
// Cherry 3.4483
// Cottonwood 3.4483
// Cypress 3.4483
// Gum 3.4483
// Hackberry 3.4483
// Hard Maple 3.4483
// Hickory 3.4483
// Pecan 3.4483
// Poplan 3.4483
// Red Alder 3.4483
// Red Elm 3.4483
// Red Oak 6.8966
// Sassafras 3.4483
// Soft Maple 3.4483
// Sycamore 3.4483
// White Oak 10.3448
// Willow 3.4483
// Yellow Birch 3.4483
