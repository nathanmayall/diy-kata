const humanCatDogYears = (number) => {
  if (number < 1) return [number, number, number];
  const result = [number, 0, 0];
  for (let i = 0; i <= number; i += 1) {
    if (i === 1) {
      result[1] += 15;
      result[2] += 15;
    }
    if (i === 2) {
      result[1] += 9;
      result[2] += 9;
    }
    if (i > 2) {
      result[1] += 4;
      result[2] += 5;
    }
  }
  return result;
};

module.exports = humanCatDogYears;
