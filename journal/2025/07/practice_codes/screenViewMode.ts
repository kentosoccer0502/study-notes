function screenViewMode(height: number, width: number): string {
  return height >= width ? "portrait" : "landscape";
}
