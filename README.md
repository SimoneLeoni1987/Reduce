# Reduce

Sample trick to merge different arrays

const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", false],
  ["Ben", "4", "20", "100", true],
];

const arr2 = [
  ["name", "id", "height"],
  ["Bob", "2", "50"],
  ["John", "1", "45"],
  ["Ben", "4", "43"],
  ["Susan", "3", "48"]
];

const arr3 = [
  ["name", "id", "parent"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"]
];


Desired data would be a merged array, database-like.

Reduce functions has been used to achieve that.
