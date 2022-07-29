function solution(input) {
  input = input.split("\n");
  const [N, M] = input.shift().split(" ");
  const nameMap = new Map();
  const numMap = new Map();
  for (let i = 0; i < N; i++) {
    nameMap.set(i + 1, input[i]);
    numMap.set(input[i], i + 1);
  }
  let answer = "";
  for (let i = N; i < input.length; i++) {
    if (isNaN(input[i])) answer += numMap.get(input[i]) + "\n";
    else answer += nameMap.get(+input[i]) + "\n";
  }
  return answer;
}

console.log(
  solution(
    "26 5\nBulbasaur\nIvysaur\nVenusaur\nCharmander\nCharmeleon\nCharizardSquirtle\nWartortle\nBlastoise\nCaterpie\nMetapod\nButterfree\nWeedle\nKakuna\nBeedrill\nPidgey\nPidgeotto\nPidgeot\nRattata\nRaticate\nSpearow\nFearow\nEkans\nArbok\nPikachu\nRaichu\n25\nRaichu\n3\nPidgey\nKakuna"
  )
);
