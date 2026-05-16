function todoCall(arr: string[]): () => string {
  const toDoArr: string[] = arr;
  return (): string => {
    const task = toDoArr.shift();
    if (!task) return 'All done!';
    return task;
  };
}

const todoCaller = todoCall(['Read a Book', 'Work out', 'Recursion']);
console.log(todoCaller());
console.log(todoCaller());
console.log(todoCaller());
console.log(todoCaller());
