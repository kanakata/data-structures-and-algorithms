// 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.
function weekTemps() {
  this.dataStore = [
    [25, 27, 31, 25, 37, 21, 30],
    [29, 24, 32, 28, 34, 21, 10],
    [21, 35, 26, 28, 34, 25, 34],
    [39, 35, 32, 29, 32, 34, 35],
  ];
  this.average = average;
}

function average(type, number = 0) {
  let sum = 0;
  let average;
  let all = [];
  switch (type) {
    case 'month':
      for (let i = 0; i < this.dataStore.length; i++) {
        let dat = this.dataStore[i];
        for (let j = 0; j < dat.length; j++) {
          sum += this.dataStore[i][j];
        }
      }
      average = sum / 28;
      break;
    case 'week':
      let data = this.dataStore[number - 1];
      for (let i = 0; i < data.length; i++) {
        sum += data[i];
      }
      average = sum / 7;
      break;
    case 'all':
      let avg = [];

      for (let i = 0; i < this.dataStore.length; i++) {
        let dat = this.dataStore[i];
        for (let j = 0; j < dat.length; j++) {
          if (j == dat.length - 1) {
            avg.push(sum);
            sum = 0;
          } else {
            sum += this.dataStore[i][j];
          }
        }
      }

      for (let i = 0; i < avg.length; i++) {
        all.push(' Week' + (i + 1) + ': ' + avg[i] / 7);
      }

      average = all.toString();
      break;
  }

  return average;
}

let val = new weekTemps();

console.log(val.average('all'));
