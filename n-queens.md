### N-Queens

Given an n x n chessboard, how many different ways can you place n queens, such that none of them can attack each other?

####Board functions:

- makeEmptyBoardMatrix(n)
- range()
- isInBounds()
- getPiece()
- setPiece()
- allRowsCopy()
- hasAnyQueensConflicts()
- togglePiece() //for interacting with a UI
- getFirstRowColumnIndexForMajorDiagonalOn(row, col)
- getFirstRowColumnIndexForMinorDiagonalOn(row, col)
- hasAnyQueenConflictsOn(row, col)

####Helper functions for algorithm:

- hasRowConflictAt(rowIndex)
- hasAnyRowConflicts()
- hasColConflictAt(colIndex)
- hasAnyColConficts()
- hasMajorDiagonalConflictAt(majorDiagonalColumnIndexAtFirstRow)
- hasAnyMajorDiagonalConflicts()
- hasMinorDiagonalConflictAt(minorDiagonalColumnIndexAtFirstRow)
- hasAnyMinorDiagonalConflicts()

####Solutions

- countNQueensSolutions() 
  Return a count of the total number of solutions to the n-queens problem.
- findNQueensSolution() 
  Return a single solution to the n-queens problem.

