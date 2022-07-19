function solution(start, end) {
  let visited = Array.from({ length: 100001 }, () => 0);
  let queue = [[start, 0]];
  visited[start] = 1;
  while (queue.length) {
    let [loc, cnt] = queue.shift();
    // 이미 방문한 요소는 아래의 과정을 거치지 않는다.
    if (!visited[loc]) continue;
    // BFS로 풀이하였으므로 현재 위치가 도착지일 경우 최소의 시간이며 이를 반환 후 종료한다.
    if (loc === end) return cnt;
    for (let next of [loc - 1, loc + 1, loc * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        // 입력 조건 : 방문하지 않은 요소, 0과 같거나 큰 경우, 100000과 같거나 작은 경우
        visited[next] = 1;
        queue.push([next, cnt + 1]);
      }
    }
  }
}
console.log(solution(5, 17)); // 4
