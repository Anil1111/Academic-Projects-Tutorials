console.log("-------------------Generics----------------------");

const names10: string[] = ['Rich', 'Abraham'];
const names11: Array<string> = ['Rich', 'Abraham'];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done');
  }, 1000);
});

promise.then(data => {
  data.split('');
});


console.log("-------------------Generic Function----------------------");



console.log("-------------------Generic Function----------------------");
