var Board = function(n) {
  this.rows = [];
  this.size = n;

  for (var row = 0; row < n; row ++) {
    var cols = [];
    for (var col = 0; col < n; col++) {
      cols.push(0);
    }
    this.rows.push(cols);
  }
}

Board.prototype.printBoard = function() {
  for (var i = 0; i < this.size; i++) {
    var arr = [];
    for (var j = 0; j < this.size; j++) {
      arr.push(this.getPiece(i,j));
    }
    console.log(i + '--' + arr.join(" "));
  }
}

Board.prototype.isInBounds = function(row, col) {
  return ((0 <= row) && (row < this.size) &&
    (0 <= col) && (col < this.size));
}

Board.prototype.getPiece = function(row, col) {
  if (this.isInBounds(row, col)) {
    return this.rows[row][col];
  } else {
    return 0;
  }
}

Board.prototype.setPiece = function(row, col, value) {
  this.rows[row][col] = value;
}

Board.prototype.hasRowConflictAt = function(rowIndex) {
  var count = 0;
  for (var colIndex = 0; colIndex < this.size; colIndex++) {
    count += this.getPiece(rowIndex, colIndex);
  }
  return (count >= 2);
}

Board.prototype.hasColConflictAt = function(colIndex) {
  var count = 0;
  for (var rowIndex = 0; rowIndex < this.size; rowIndex++) {
    count += this.getPiece(rowIndex, colIndex);
  }
}

Board.prototype.hasAnyRowConflicts = function() {
  for (var rowIndex = 0; rowIndex < this.size; rowIndex++) {
    if (this.hasRowConflictAt(rowIndex)) {
      return true;
    }
  }
  return false;
}

Board.prototype.hasAnyColConflicts = function() {
  for (var colIndex = 0; colIndex < this.size; colIndex++) {
    if (this.hasColConflictAt(colIndex)) {
      return true;
    }
  }
  return false;
}

Board.prototype.hasMajorDiagonalConflictAt = function(ColIndexAtFirstRow) {
  var row = 0;
  var count = 0;
  var col = ColIndexAtFirstRow;

  for (; col < this.size; col++, row++) {
    count += this.getPiece(row, col);
  }
  return (count >= 2);
}

Board.prototype.hasAnyMajorDiagonalConflicts = function() {
  var col = -1*this.size + 1;
  for (; col < this.size; col++) {
    if (this.hasMajorDiagonalConflictAt(col)) {
      return true;
    }
  }
  return false;
}

Board.prototype.hasMinorDiagonalConflictAt = function(ColIndexAtFirstRow) {
  var row = 0;
  var count = 0;
  var col = ColIndexAtFirstRow;

  for (; col >= 0; col--, row++) {
    count += this.getPiece(row, col);
  }
  return (count >= 2);
}

Board.prototype.hasAnyMinorDiagonalConflicts = function() {
  var col = 2*this.size - 1;
  for (; col >= 0; col--) {
    if (this.hasMinorDiagonalConflictAt(col)) {
      return true;
    }
  }
  return false;
}

Board.prototype.hasAnyQueensConflicts = function(row, col) {
  // return (
  //       this.hasRowConflictAt(row) ||
  //       this.hasColConflictAt(col) ||
  //       this.hasMajorDiagonalConflictAt(col - row) ||
  //       this.hasMinorDiagonalConflictAt(col + row))
  //     );
}





