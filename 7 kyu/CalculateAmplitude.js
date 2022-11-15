//Calcualte the  temperature amplitude and return it. Keep in mind, there might be errors in the array and sometimes the array may contain nested arrays. Make sure you account for this.

const calTempApt = function (temp) {
  temp = temp.flat();
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== "number") {
      temp.splice(i, 1);
    }
  }
  const tempApt = [Math.max(...temp), Math.min(...temp)];
  console.log(tempApt);
  return tempApt.reduce((a, b) => a - b);
};
