function isValidSudoku(board: string[][]): boolean {
  let cols: Map<number, Set<string>> = new Map();
  let rows: Map<number, Set<string>> = new Map();
  let boxes: Map<string, Set<string>> = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;

      const boxKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

      if (
        (rows.has(r) && rows.get(r)?.has(board[r][c])) ||
        (cols.has(c) && cols.get(c)?.has(board[r][c])) ||
        (boxes.has(boxKey) && boxes.get(boxKey)?.has(board[r][c]))
      ) {
        return false;
      }

      if (!rows.has(r)) rows.set(r, new Set<string>());
      if (!cols.has(c)) cols.set(c, new Set<string>());
      if (!boxes.has(boxKey)) boxes.set(boxKey, new Set<string>());

      rows.get(r)?.add(board[r][c]);
      cols.get(c)?.add(board[r][c]);
      boxes.get(boxKey)?.add(board[r][c]);
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

// console.log(
//   isValidSudoku([
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );
