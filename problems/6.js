// row-ise processing
let array = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

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
