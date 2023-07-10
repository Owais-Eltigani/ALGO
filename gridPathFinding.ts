// find all possible paths in grid from point (0,0) to (n,n)
// you can only move up or left.
function gridPathFinding(rows: number, cols: number) {
  if (rows == 1 || cols == 1) return 1;

  return gridPathFinding(rows - 1, cols) + gridPathFinding(rows, cols - 1);
}

console.log(gridPathFinding(2, 3));
