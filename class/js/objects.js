"use strict";

let o1 = {k1:'111','k2':1.2345, k3:[1,2-3], k4:{j1:'internal'}, 
"data values":[1,2,3-4]};

//Обход объекта

//1
for (let key in o1)	log(`o1.${key}=${o1[key]}`);
echo();
//2
for (let key of Object.keys(o1))	log(`o1.${key}=${o1[key]}`);
	
// values
log(Object.values(o1));

echo('+');

let o2 = o1; // reference copy!
log(o2)
o1.k1 ="Object o1";
log(o2);

echo();
// shallow copy
let o3 = {...o1};
o3.k2 = "o3 object";
log(o3);log(o1);

echo();
o3.k4.j1 = "o3";
log(o3);log(o1);

// full clone
//1
let o4 = JSON.parse(JSON.stringify(o1)); 
//2
let o5 = structuredClone(o1);


let student = {id:111, name:"Peter", age:25, 
getInfo: function() { return `Student: {id:${this.id}, name:${this.name}, age:${this.age}}`; },
toString: function() { return this.getInfo();}
};

Object.freeze(student);
//student.pass = "222"; //can't define property "pass": Object is not extensible
//delete student.id; // property "id" is non-configurable and can't be deleted
//student.id = 77111; // "id" is read-only
log(student);

echo();
let student2 = {id:2344, name:"Kate", age:19,
	getInfo: function() { return `Student: {id:${this.id}, name:${this.name}, age:${this.age}}`; },
	toString: function() { return this.getInfo();}
};

Object.seal(student2);
//student2.pass="qweqwe234ad";
//delete student2.id;
student2.age = 20;

log(student2);


let student3 = {id:2345, name:"Jane", age:19,
	getInfo: function() { return `Student: {id:${this.id}, name:${this.name}, age:${this.age}}`; },
	toString: function() { return this.getInfo();}
};

Object.defineProperty(student3,'id',{
value: '2345',
writable: false,
configurable: false,
enumerable: true
});

//student3.id = 123123; // "id" is read-only
//delete student3.id; // property "id" is non-configurable and can't be deleted
student3.age=21;

// classes

let Student = function(id,name,age){
	this.name = name;
	this.age = age;
	this.id = id;
}

Student.prototype.getInfo = function() { return `Student: {id:${this.id}, name:${this.name}, age:${this.age}}`; };

Student.prototype.toString = function() { return this.getInfo();};

let student4 = new Student(123,"Leo",18);
let student5 = new Student(55,"Basil",21);

// class Student

class Student2{

constructor(id,name,age){
		this.name = name;this.age = age;this.id = id;
}	
	
getInfo() { return `Student: {id:${this.id}, name:${this.name}, age:${this.age}}`; }
toString(){return this.getInfo();}	
}

let student6 = new Student2(4555,"Leonid",19);

// inheritance

class HumanIGNTU{
	#id;
	static University='IGNTU';
	
	constructor(id,name,age){
		this.name = name;this.age = age;this.#id = id;
	}

	getInfo() { return `id:${this.#id}, name:${this.name}, age:${this.age}`; }
	toString(){return this.getInfo();}
	get id(){ return this.#id;}
//	set id(val){ this.#id = val; log('call setter id..');}	
}

class Student3 extends HumanIGNTU
{
	constructor(id,name,age){
		super(id,name,age);
		
	}
	
	getInfo(){ return `Student: {${super.getInfo()}}`;  }
}


class Prepod extends HumanIGNTU
{
	constructor(id, name, age, dept='MechMath')
	{
		super(id,name,age);
		this.dept = dept;
	}

	getInfo()
	{
		return `Prepod: {${super.getInfo()}, dept:${this.dept}}`;
	}
}






		