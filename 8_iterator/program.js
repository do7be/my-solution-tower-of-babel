const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let currentVal = 1;
    return {
      next() {
        let currentValTmp = currentVal;
        currentVal++;

        if (currentValTmp > max) {
          return {done: true};
        }

        let fizz = currentValTmp % 3 === 0 ? 'Fizz' : '';
        let buzz = currentValTmp % 5 === 0 ? 'Buzz' : '';

        if (fizz || buzz) {
          return {done: false, value: fizz+buzz};
        }
        else {
         return {done: false, value: currentValTmp};
        }
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}