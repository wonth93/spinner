const spinner = function(array) {
  let time = 100;
  for (const elem of array) {
  setTimeout(() => {
    process.stdout.write(`\r${elem}`);
  }, time += 200)
  }
  setTimeout(() => {
    process.stdout.write(`\n`);
  }, time)
}

const spin = ["\\", '|', "/", "-", "\\", '|', "/", "-", "\\", '|', "/", "-",];
spinner(spin)