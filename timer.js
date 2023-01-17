const timers = process.argv.slice(2)
for (number of timers) {
    if (typeof Number(number) === "number" && number >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000)
  }
}
