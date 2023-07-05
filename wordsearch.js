const transpose = function(matrix) {

  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposedMatrix = Array.from({ length: cols }, () => new Array(rows));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
};


const wordSearch = (letters, word) => {
  if (!letters) {
    return false;
  }

  const horizontalJoinOriginal = letters.map(ls => ls.join(''));
  const horizontalJoinTranspose = transpose(letters).map(ls => ls.join(''));

  const fullMatrix = horizontalJoinOriginal.concat(horizontalJoinTranspose);

  for (l of fullMatrix) {
    if (l.includes(word)) return true;
  }
  return false;
};





module.exports = wordSearch;