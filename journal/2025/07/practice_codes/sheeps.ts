function sheeps(count: number): string {
  if (count <= 1) return "1 sheep ~ ";
  return sheeps(count - 1) + `${count}` + " sheep ~ ";
}
