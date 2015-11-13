### N-Queens

Given an n x n chessboard, how many different ways can you place n queens, such that none of them can attack each other?

####Board functions:

- new Board(n)
- printBoard()
- isInBounds()
- getPiece()
- setPiece()

####Helper functions for algorithm:

- hasRowConflictAt(rowIndex)
- hasAnyRowConflicts()
- hasColConflictAt(colIndex)
- hasAnyColConficts()
- hasMajorDiagonalConflictAt(majorDiagonalColumnIndexAtFirstRow)
- hasAnyMajorDiagonalConflicts()
- hasMinorDiagonalConflictAt(minorDiagonalColumnIndexAtFirstRow)
- hasAnyMinorDiagonalConflicts()
- hasAnyQueensConflicts()

####Questions

- **countNQueensSolutions()** Return a count of the total number of solutions to the n-queens problem.
- **findNQueensSolution()** Return a single solution to the n-queens problem.
- **returnAllNQueensSolutions()** Return all board solutions.
