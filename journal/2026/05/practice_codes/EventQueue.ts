class Item {
  data: taskLambda;
  next: Item | null;

  constructor(data: taskLambda, next: Item | null = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  head: Item | null;
  tail: Item | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  peekFront(): taskLambda | null {
    if (!this.head) return null;
    return this.head.data;
  }

  enqueue(data: taskLambda): void {
    const newItem = new Item(data);

    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
      return;
    }

    this.tail!.next = newItem;
    this.tail = newItem;
  }

  dequeue(): taskLambda | null {
    if (!this.head) return null;

    const deletedItem = this.head;

    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return deletedItem.data;
  }
}

class EventQueue {
  queue: { [key: string]: Queue };

  constructor() {
    this.queue = {};
  }

  push(event: string, lambda: taskLambda): void {
    // イベントが存在しない場合は作成
    if (!this.queue[event]) {
      this.queue[event] = new Queue();
    }

    this.queue[event].enqueue(lambda);
  }

  eventExists(event: string): boolean {
    if (!this.queue[event]) return false;

    return this.queue[event].peekFront() !== null;
  }

  dispatch(event: string): void {
    if (!this.eventExists(event)) {
      console.log('Event is none!');
      return;
    }

    const task = this.queue[event]!.dequeue();

    if (task) {
      console.log(task());
    }
  }
}

type taskLambda = () => string;

const math: taskLambda = () => 'You will study math today';
const music: taskLambda = () => 'You will study music today';
const squat: taskLambda = () => 'You will work out squat 6 times today';
const pushUp: taskLambda = () => 'You will work out squat 20 Push-up today';

const scheduler = new EventQueue();
scheduler.push('study', math);
scheduler.push('study', music);
scheduler.push('workout', squat);
scheduler.push('workout', pushUp);

scheduler.dispatch('study');
scheduler.dispatch('study');
scheduler.dispatch('study');

scheduler.dispatch('workout');
scheduler.dispatch('workout');
scheduler.dispatch('something');
