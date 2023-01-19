const wordSearch = (lettersGrid, word) => {
  const horizontalJoin = lettersGrid.map((lettersRow) => lettersRow.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let transposeGrid = lettersGrid[0].map((col, i) =>
    lettersGrid.map((row) => row[i])
  );
  const verticalJoin = transposeGrid.map((lettersCol) => lettersCol.join(""));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const arr1 = [
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
];
console.log(wordSearch(arr1, "SEINFELD"));

module.exports = wordSearch;
