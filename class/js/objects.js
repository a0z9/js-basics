"use strict";

let student = {id:1762365, 'name':'Basil', age:23, dept:'phys'};

let o2 = {k1:123,'k2':'value2',k3:{'data':[1,2,3,4]}};

//1
for (let idx in student) log(`${idx}:${student[idx]}`);
//log('-'.repeat(45));
echo();
//2
for (let idx of Object.keys(student)) log(`${idx}:${student[idx]}`);
echo();
//3
for (let v of Object.values(student)) log(`**:${v}`);
	
let student2 = {id:1762365, 'name':'Basil', age:23, dept:'phys', 
getInfo: function(){return `Student: ${this.name}, ${this.age}, ${this.dept}.`},
//toString2: function() {return `Student: ${this.name}, ${this.age}, ${this.dept}`},
toString: function() {return this.getInfo();} 
//getInfo: ()=>`Student: ${name}, ${age}, ${dept}`
};

Object.defineProperty(student2,'id',{
	value: 1011,
	enumerable: true,
	writable: false,
	configurable: false
}); 

//delete student2.id;
//student2.id = 123123;

//deep cloning

//1
let o3 = JSON.parse(JSON.stringify(o2)); 

//2
let o4 = structuredClone(o2); 


// classes

const Student = function(id,name){
	
	this.name = name;
	this.id = id;
}

Student.prototype.getInfo = function(){
return `Student: ${this.id}, ${this.name}`;

}

Student.prototype.toString = function() {
	return this.getInfo();

}

let st1 = new Student(1,"Ann");
let st2 = new Student(2,"Kate");

// class

class Base{
	#id;
	//static UNIVER = 'IGNTU';
	static get UNIVER(){return 'IGNTU';}
	
	
	constructor(id,name,age)
	{
		this.name = name;
		this.#id = id;
		this.age = age;
	}
	
	get id(){return this.#id;}	
	
	getInfo(){
		return `id:${this.id}, name:${this.name}, age:${this.age}`;
	}

	toString(){
		return this.getInfo();

	}
	
}

Base.DATA = 'Learn JS';

class Stud extends Base
{
	constructor(id, name, age)
	{
		super(id,name,age);
	}
	
	getInfo(){
		return `Student [${super.getInfo()}]`;
	}
}

class Prepod extends Base
{
	constructor(id, name, age, dept)
	{
		super(id,name,age);
		this.dept = dept;
	}

	getInfo()
	{
		return `Prepod [${super.getInfo()}, dept:${this.dept}]`;
	}
}


class Stud2 {
	
constructor(id,name,age)
{
	this.name = name;
	this.id = id;
	this.age = age;
}	

getInfo(){
return `Student [id:${this.id}, name:${this.name}, age:${this.age}]`;	
}

toString(){
return this.getInfo();	
	
}
	
	
}




			