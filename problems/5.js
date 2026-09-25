// columnar processing
let array = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

let sum = 0;
let result = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (j == array[i].length - 1) {
      sum += array[i][j];
      result.push(sum / array[i].length);
      sum = 0;
    } else {
      sum += array[i][j];
    }
  }
}
