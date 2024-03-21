'use strict';

function sayHello(name='Peter'){
	var привет = `Hello, ${name}!`;
	log(привет);
    return привет;
}

let sayHello2 =  function(name)
{
	name = name || 'Basil';
	log(`Hi, ${name}!`);
};

let sayHello3 = (name='Andrei')=>log(`${name}, how do you do!`);

//области видимости
let varGlobal = 'global';

function F1(){
	varGlobal = 'func F1';
	log(`In func F1: ${varGlobal}`);
}

function F2()
{
	function F3(){
	varGlobal = 'func F3';
	log(`In func F3: ${varGlobal}`);
	}

	log(`In func F2: ${varGlobal}`);
	
	return F3();
}

var varGlobal2;

function F4()
{
 var inner1 = 1;
 let inner2 = 1;
 var inner1 = "qqwe";
 // let inner2 = [];  //Uncaught SyntaxError: redeclaration of let inner2
 inner2 = [1,2,3];
 varGlobal2 = "F4";	
}

{
let inner = 1;	
var inner2 = 10	
}


log(`In global: ${varGlobal}`);


// замыкания

const Counter1 = function(){
	var counter = 0;
	
	function f1()
	{
		return ++counter;
	}
	return f1;  // f1() - not works!!
}

const Counter2 = function(counter = 0) {
	
	function f1()
	{
		return ++counter;
	}
	return f1;  // f1() - not works!!
}

const Counter = (c=0)=>()=>++c;


const Counter3 = function(counter = 0) {

	function increment()
	{
		return ++counter;
	}
	
	function f2()
	{
		return counter;
	}
	
	function decrement()
	{
		return --counter;
	}
	
	function reset()
	{
		return counter=0;
	}
	
	return [f2,increment,decrement,reset];  // f1() - not works!!
}



 const Counter4 = (c=0) => {
 	//...
 	//..
    return {
    reset: ()=>c=0,
    increment: ()=>++c,
    decrement: ()=>--c,
    get value(){return c;}
   	};
}


const Count = (
(c=0) => {
	//...
	//..
	return {
		reset: ()=>c=0,
		increment: ()=>++c,
		decrement: ()=>--c,
		get value(){return c;}
	};
}
)();
	












