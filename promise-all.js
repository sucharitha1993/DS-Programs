// Let's assume that we haven't Promise.all method
// but we still need to operate with multiple Promises
// Task: need to implement `all` function that operates
// with multiple promises with the same input/output signature 
// as in original/native implementation
// No Async/await

//Question1
const pr = [
  new Promise(resolve => {setTimeout(() => resolve(1), 100)} ),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
  Promise.resolve(5),
]

all(pr).then(arr => console.log(arr)) // [1,2,3,4,5]

/**
 * 
 * @param params {Promise<T>[]}
 * @returns Promise<T[]>
 */
function all(params) {
    // implementation -> Answer
    let allPromise = new Promise(resolve => {
        let result = [];
      	let count = 0;
        for (let i=0; i<params.length; i++) {
          params[i].then(res => {
            count++;
            result[i] = res;
            if (count == params.length) {
              resolve(result);
            }
          });
        }

    });
  
  return allPromise; 
}



//Question2 - order of execution
setTimeout(function timeout() {
    console.log('timeout');
}, 0);

let p = new Promise(function(resolve, reject) {
    console.log('Promise creation');
    resolve();
});

p.then(function(){
    console.log('Promise handle');
});

console.log('Script end');

//Answer in order & reasons
// Promise creation -> sync call
// Script end -> sync call
// Promise handle - >async micro service
// timeout - > async macro service


