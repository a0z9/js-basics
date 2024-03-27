'use strict';
//1
function sayGreets1(name='Иван') {
	//let name;
	//let hello = "Salute!!";
	let hello = `Salute, ${name}!!`;
	return hello;
	//..
	//..
	//return  "Salute!!";
}

//2
let sayGreets2 = function(name="Настя")
{
  return  `Привет, ${name}!!`;
};


//3
const sayGreets3_0 = (name)=>{
	name = name || 'Jeane';
	return  `How do you do, ${name}!!`;
};

//4
const sayGreets3 = (name="Коля")=>`Hello, ${name}!!`;

//5
//Function


//vars

let data = "global";

function F1(){
	
	data="F1 data";
	log( "1.data="+data);
	
	function F2(){
	  // let data;
	   //..
	
		data = "F2 data";
	}
	
	F2();
	
}


//log( "2.data="+data);

//closures

//1
const Counter0 = function()
{
  let c = 0;	
  function f1()
  {
	  return ++c;
  }
  //...
	
  return f1;	
}


const Counter = function(c = 0) {
	
	function f1()
	{
		return ++c;
	}
	//...

	return f1;
}


/**
* 
* @description Counter
* line 2
* line 3
* call [0]() - value
* call [1]() - increment
* ....
* @author Andrei Trainer
* @param {number} c
* 
* @return {number}
*/

function CounterU(c = 0)
{

	function incr()
	{
		return ++c;
	}
	function getc()
	{
		return c;
	}
	function decr()
	{
		return --c;
	}
	function reset()
	{
		return c=0;
	}
	
	//...

	return [getc,incr,decr,reset];
}


const CounterU2=(c=0)=>[()=>c,()=>++c,()=>--c,()=>c=0];




