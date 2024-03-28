//1
let o1 = {};
//2
o1 = new Object();

o1 = {'k1':123, k2:'test', k3:[1,2,3], k4:{j1:22, j2:33}, k5:true, k6:8798, k7:()=>'Hi!'};
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


log('++ clone ++');

//1
let o4 = JSON.parse(JSON.stringify(o1));
log(o4)


//2
let o11 = {...o1};
let diff = {'k7': o1.k7};

delete o11.k7;

let o5 =structuredClone(o11); 
o5={...o5,...diff}; 
o11=null;


log('++ props descriptors, freeze, seal ++');

Object.defineProperty(o5,'k1',
{
value:1,
writable: false,
configurable: false,
enumerable: true //false	
}
);

// Object.seal(o5);
Object.freeze(o5);  // поверхностная заморозка


// шаблоны и конструкторы

let student = {id:101, name:"Peter", age:19,
               getInfo: function() { /*log(this);*/ return `Student ${this.name}, id:${this.id}, age:${this.age}`;},
  //             getName: ()=>{log(this); return this.name; }  // this -> Window 
toString: function() { return this.getInfo();}
};


function Student(id,name,age)
{
	this.id = id;
	this.name = name;
	this.age = age;
}

Student.prototype.getInfo = function() { return `Student ${this.name}, id:${this.id}, age:${this.age}`;};
Student.prototype.toString = function() { return this.getInfo();};


function createStudent(id, name, age)
{
	
	
	
	
}



let kate = new Student(111,"Kate",21);
let basil = new Student(133,"Basil",20);

let studentsCol = ['122,Катя,21', '145,Николай,20' ];
students = [];
for (let st of studentsCol) {
	let values = st.split(',');
	students.push(new Student(Number(values[0]), values[1], Number(values[2]) ) );	
}







