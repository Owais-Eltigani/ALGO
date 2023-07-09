#include <iostream>

// find all possible paths in grid from point (0,0) to (n,n)
// you can only move up or left.
int gridPathFinding(int rows, int cols) {

  if (rows == 1 || cols == 1)
    return 1;

  return gridPathFinding(rows - 1, cols) + gridPathFinding(rows, cols - 1);
}

int main(int argc, char const *argv[]) {

  std::cout << "\n" << gridPathFinding(2, 3) << "\n";

  return 0;
}
