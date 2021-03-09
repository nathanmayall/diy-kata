const fizzBuzz = (number) => {
  if (number % 15 === 0) {
    return `FizzBuzz, ${number}`;
  }
  if (number % 5 === 0) {
    return `Buzz, ${number}`;
  }
  if (number % 3 === 0) {
    return `Fizz, ${number}`;
  }
  return number.toString();
};

module.exports = fizzBuzz;
