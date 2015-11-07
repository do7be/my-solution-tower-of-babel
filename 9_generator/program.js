const max = process.argv[2];
let FizzBuzz = function*() {
  let currentVal = 1;
  while (currentVal <= max) {
    let fizz = currentVal % 3 === 0 ? 'Fizz' : '';
    let buzz = currentVal % 5 === 0 ? 'Buzz' : '';

    if (fizz || buzz) {
      yield fizz+buzz;
    }
    else {
      yield currentVal;
    }

    currentVal++;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}