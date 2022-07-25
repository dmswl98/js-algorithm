// 배열의 연산 shift, push로 인한 시간 초과
// function solution(input) {
//   let card = Array.from({length: +input}, (v, i) => i + 1);
//   while(card.length > 1) {
//       card.shift();
//       card.push(card.shift());
//   }
//   return card[0];
// }
// console.log(solution(6)); // 4

// 연결 리스트
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  getHead() {
    return this.head.val;
  }

  removeHead() {
    const currentHead = this.head;
    this.head = currentHead.next;
    this.head.prev = null;
    this.length--;
    return currentHead;
  }

  getLength() {
    return this.length;
  }
}

function solution(N) {
  const cards = new LinkedList();
  for (let i = 1; i <= N; i++) {
    cards.push(i);
  }

  while (cards.getLength() > 1) {
    cards.removeHead();
    cards.push(cards.getHead());
    cards.removeHead();
  }
  return cards.getHead();
}

console.log(solution(6)); // 4

// 배열의 맨 앞 요소를 버리는 연산을 제외하는 코드
function solutionBest(N) {
  let queue = [];
  for (let i = 1; i <= N; i++) {
    queue[i - 1] = i;
  }
  let num = 1;
  while (num < queue.length) {
    queue.push(queue[num]);
    num += 2;
  }
  return queue[queue.length - 1];
}

console.log(solutionBest(6)); //4
