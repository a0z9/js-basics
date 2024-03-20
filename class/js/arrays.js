
let arr = [1,-233,4,'ss',[-2,-3],true,22];
log(arr);
//stack

arr.push(10);
arr.push(-310);
log(`push: ${arr}`);

arr.pop();
log(`pop: ${arr}`);

arr.splice(2,0,'inserted')
log(`splice insert: ${arr}`);

arr.splice(2,1,'overwrited')
log(`splice overwrite: ${arr}`);

arr.splice(2,2)
log(`splice delete 2 elements: ${arr}`);

//queue

let queue = [];
//1
queue.unshift("1");
queue.unshift(2);
queue.unshift("3d");
log(`1: queue: ${queue}`);

log(`get first in queue: ${queue.pop()}`);
log(`1: queue: ${queue}`);

//2 
queue = [];
queue.push("1");
queue.push(2);
queue.push("3d");
log(`2: queue: ${queue}`);
log(`get first in queue: ${queue.shift()}`);
log(`2: queue: ${queue}`);


