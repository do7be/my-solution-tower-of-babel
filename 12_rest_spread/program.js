let args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

console.log(avg(...args));

function avg(...numbers) {
  let sum = numbers.reduce((sum, n) => sum + n);
  return sum / numbers.length;
}