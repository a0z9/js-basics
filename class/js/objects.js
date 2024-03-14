"use strict";

let o2 = {}
o2.a1 = 11; o2.a2=333; //.....

let o1 = {a:"aaa",b:111, c: {d:{v:"Hi!!!"}}};

for(let idx in o1)
{
log(`o1[${idx}]=${o1[idx]}`   );	
}

log(Object.values(o1));
log(Object.keys(o1));

delete o1.b;
o1.greets = "Hello!";

for (let idx in o1) {log(`o1[${idx}]=${o1[idx]}`   );}
	
// methods

let stud1 = {name:"Andrei", id:1119809, 
getInfo: function(){return `Student: ${this.name}, id: ${this.id}`}
};

stud1.id = 10001;
log(stud1.getInfo());
	
Object.defineProperty(stud1,'id',
{value:1111,
 enumerable: true,
 writable: false,
 configurable: false
});

log('-'.repeat(25));
log(stud1.getInfo());
//stud1.id = 10001;
//delete stud1.id;
log(stud1.getInfo());

// classes

let Student = function(name,id, /*surname,dept,group,..*/)
{
	this.name = name;
	this.id = id;
}

Student.prototype.getInfo = function() {return `Student: ${this.name}, id: ${this.id}`};
	
let stud2 = new Student("Basil",123879);
let stud3 = new Student("Peter",98765468);	

let Prepod = function(name, id, dept /*surname,dept,group,..*/) {
	this.name = name;
	this.id = id;
	this.dept = dept;
}

Prepod.prototype.getInfo = function() {return `Преподаватель: ${this.name}, id: ${this.id}, dept: ${this.dept}`};	

let prepod = new Prepod('Andrei',123098,"IT");

// Classes Syntax

class Prepod1{

static University="BSU";
	
constructor(name, id, dept /*surname,dept,group,..*/) {
		this.name = name;
		this.id = id;
		this.dept = dept;
	}	
	
getInfo() {return `Преподаватель: ${this.name}, id: ${this.id}, dept: ${this.dept}`};		
	
}


	