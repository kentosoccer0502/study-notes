class Item {
  data: CallableFunction;
  next: Item | null;

  constructor(data: CallableFunction, next: Item | null = null) {
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

  peekFront(): Item | null {
    return this.head;
  }

  enqueue(data: CallableFunction): void {
    const newItem = new Item(data);
    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
      return;
    }

    this.tail!.next = newItem;
    this.tail = newItem;
  }

  dequeue(): Item | void {
    if (!this.head) return;

    const delItem = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return delItem;
  }
}

class TaskQueue {
  queue: Queue;

  constructor() {
    this.queue = new Queue();
  }

  push(task: taskRamda): void {
    this.queue.enqueue(task);
  }

  taskExists(): boolean {
    return this.queue.peekFront() !== null;
  }

  run(): void {
    const taskItem = this.queue.dequeue();
    if (!taskItem) return;
    console.log(taskItem.data());
  }
}

type taskRamda = () => string;
const firstTask: taskRamda = () => 'Running the first function!!!';
const secondTask: taskRamda = () => 'Running the second function~~~';
const thirdTask: taskRamda = () => 'Running the third function>>>';
const fourthTask: taskRamda = () => 'Running the fourth function<<<';

const scheduler = new TaskQueue();
scheduler.push(firstTask);
scheduler.push(secondTask);
scheduler.push(thirdTask);
scheduler.push(fourthTask);
while (scheduler.taskExists()) scheduler.run();
