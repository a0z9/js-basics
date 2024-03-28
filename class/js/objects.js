//1
let o1 = {};
//2
o1 = new Object();

o1 = {'k1':123, k2:'test', k3:[1,2,3], k4:{j1:22, j2:33}, k5:true, k6:8798};
log(o1);
delete o1.k6;
log(o1);

for (let key in o1)	log(`o1.${key}=${o1[key]}`);
log('-'.repeat(35));
for (let key of Object.keys(o1)) log(`o1.${key}=${o1[key]}`);
log('-'.repeat(35));

log(Object.keys(o1));
log(Object.values(o1));


// ref copy
let o2 = o1;
o2.k2 = 0;


// shallow copy ( simple 'clone')

let o3 = {...o1};
o3.k1 ='o3'; o3.k3[1]='o3'; o3.k4.j1='o3'
log(o1);
log(o3);






