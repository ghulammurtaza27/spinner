let spinnerArr = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   '];
let interval = 100;

for (let spin of spinnerArr) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}`);
  }, interval);
  interval += 200;
}
setTimeout(() => {
  console.log('\n');
}, interval);

