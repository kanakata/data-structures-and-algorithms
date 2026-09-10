let array = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

// columnar processing
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

// row-ise processing
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (j == array[i].length - 1) {
      sum += array[j][i];
      result.push(sum / array[i].length);
      sum = 0;
    } else {
      sum += array[j][i];
    }
  }
}

console.log(result);
