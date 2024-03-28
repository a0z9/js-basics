"use strict";

let o1 = {}; //empty object

o1 = {'name':'Basil', age:22, dept:'chem'};

o1 = {k1:123123, 'k2':true, k3:{j1:'inner object', j2:0}, k4:[1,2,-33,4,5], k5:'o1', 
      k6:function() {return 'o1';} };

let o2 = new Object();

// обход объектов

//1
for (let idx in o1)	log(`o1.${idx}=${o1[idx]}`);

log('-'.repeat(33));
//2
for (let idx of Object.keys(o1)) log(`o1.${idx}=${o1[idx]}`);	
	
//3
log('-'.repeat(33));
log(Object.values(o1));
log(Object.keys(o1));	


// copy and clone of objects

let o3 = o1;  //ref copy
o3.k1='o3';
log(o1);log(o3);

log('+ shallow copy +'.repeat(4));

o3 = {...o1};
o3.k1='o3 new';
o3.k3.j1='o3 new';
o3.k4[0]='o3 new';
o3.k5='o3 new';
o3.k6 = function() {return 'o3';}; 

log(o1);log(o3);

// clone - full copy

let o4 = JSON.parse(JSON.stringify(o1));
o4.k6 = function() {return 'o1';}; 

//let o5 = structuredClone(o1); // Uncaught DOMException: Function object could not be cloned.

delete o1.k6;
let o5 = structuredClone(o1); 
o1.k6 = function() {return 'o1';}; 



//freeze
Object.freeze(o1); Object.freeze(o1.k3);
// seal
//Object.seal(o3);

Object.defineProperty(o3,'k1', 
{
  value: 100,
  writable: false,
  enumerable: true,
  configurable: false	
}
)


//

	