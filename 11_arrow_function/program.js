var inputs = process.argv.slice(2);
var result = inputs.map(input => input.charAt(0))
                   .reduce((pre, current) => pre + current);
console.log(result);
