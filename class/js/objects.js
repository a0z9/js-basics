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
);


let student = {id: 1222, 'name':'Basil', age:22, dept:'chem', 
   getInfo: function() { return `Student id:${this.id}, name:${this.name}, age:${this.age}, dept:${this.dept}`; },
   toString: function() { return this.getInfo();  }
   
};


// multiple objects


let Student =
function(id, name, age, dept) {
	
	this.id = id; 
	this.name = name; 
	this.age = age; 
	this.dept = dept;
	
}

Student.prototype.getInfo = function() { return `Student id:${this.id}, name:${this.name}, age:${this.age}, dept:${this.dept}`; };

Student.prototype.toString = function() { return this.getInfo(); };


function createStudent(id, name, age, dept)
{
	let student = new Student(id, name, age, dept);
	Object.defineProperty(student,'id',
	{
		value: id,
		writable: false,
		enumerable: true,
		configurable: false
	});
//...

   return student;	
}


let kate = new Student(101,'Kate',19,'it');
let nik = new Student(103,'Коля',21,'geo');
let jane = createStudent(112,'Jane',20,'geo');
//...

// classes (emulation)

class Student2
{
constructor(id, name, age, dept) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.dept = dept;
}	
	
getInfo() { return `Student id:${this.id}, name:${this.name}, age:${this.age}, dept:${this.dept}`; }

toString() { return this.getInfo(); }	
}



class Base
{
    #id;
    static UNI = 'ISU';	// writable
    static get UNI2(){return 'ISU'; }
	constructor(id, name, age, dept)
	{
		this.#id = id;
		this.name = name;
		this.age = age;
		this.dept = dept;
	}
    get id(){ log('++ call getter'); return this.#id; }
    set id(v){ log('++ call setter'); if( v > 4000 && v <=8000   ) this.#id = v; } 
    
	getInfo()
	{
		return `id:${this.#id}, name:${this.name}, age:${this.age}, dept:${this.dept}`;
	}

	toString()
	{
		return this.getInfo();
	}
}

class Student3 extends Base
{
	constructor(id, name, age, dept, avgMark=0)
	{
		super(id, name, age, dept);
		this.avgMark = avgMark;
	}

	getInfo()
	{
		return `Student {${super.getInfo()}, avgMark:${this.avgMark}}`;
	}

	toString()
	{
		return this.getInfo();
	}
}

/*
class Master extends Student3{
	
}
*/


class Prepod extends Base
{
	constructor(id, name, age, dept, salary=55)
	{
		super(id, name, age, dept);
		this.salary = salary;
	}

	getInfo()
	{
		return `Преподаватель {${super.getInfo()}}`;
	}

	toString()
	{
		return this.getInfo();
	}
}



let ann = new Student3(1111,'Ann',22,'chem',4.7)
log(''+ann);

let vic = new Prepod(72973,'Виктор Андреевич',38,'chem',554);
log(''+vic);



log(''+student);

//

	