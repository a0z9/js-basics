
/**
* @author Andrei
* 
* @param {object} name
* 
* @return {string}
*/
function sayGreets1(name='Петя'){
	//...
	//...
	//let greets = "Hello!";
	let greets = `Hello, ${name}!`;
	//return "Hello!";
	return greets;
	

}

const sayGreets2 = function(name)
{
	name = name || "Ваня";
	//...
	//...
	//let greets = "Салют!!";
	let greets = `Салют, ${name}!!`;
	//return "Hello!";
	return greets;
}
/*
const sayGreets3 = () => {
	//...
	//...
	let greets = "Привет!!";
	//return "Hello!";
	return greets;
}
*/
const sayGreets3=(name="Ира")=>`Привет, ${name}!!`;



/**
* @description Super meth for connection
* to my server... Use it wise.
* @author Trainer
* @param {string} ip
* @param {number} port
* @param {string} protocol
* @param {string} resource
* 
* @return {string}
*/
function createConnection(ip='194.190.238.182',port=80,protocol='tcp',
   resource="1798yd/123dasd/api"){
	//..
	return `${protocol} connection ${ip}:${port} to resource ${resource} established.`;
	
}

let outer = "Global var";

//3
function F1(){
//2
outer="F1 inner";
	function F2(){
	//1	
	log(`outer=${outer}`);
	log(`outer2=${outer2}`);
	}

   F2();	
}

let outer2= "Global var2";

//Function

//eval

//...
log('--func-file--'.repeat(3));


//замыкания

function Counter()
{
	let counter = 0;
	function f1()
	{
		return ++counter;
	}

	return f1;
}

function Counter2(counter=0)
{
	return function() {return ++counter;};
}

let Counter3 = (c=0)=>()=>++c;

let Counter4 = (c=0)=>[()=>++c,()=>c];


//self called funcs

function F2(){
	//...
	var a22 = 12312;
	log("F2 run code...");
	
	return [11,22,33,'res1'];
	
}

let res1 = F2();

let res2 = (function(){
	//...
	var a22 = 12312;
	log("F2 run code...");

	return [11,22,33,'res2'];

})();

let res3 = (function() {
	//...
	var a22 = 12312;
	log("F2 run code...");

	return [11,22,33,'res3'];

}());

let res4 = (()=>{
	//...
	var a22 = 12312;
	log("F2 run code...");

	return [11,22,33,'res4'];

})();

// varargs

function testVarArgs(){
	for (let arg of arguments)	log(arg);
	return `[${[...arguments]}]`;	
}

function Summa(){
	let s=0;
	for (let arg of arguments) s+=arg;
	//for (let idx=0; idx < arguments.length; idx++)	s+=arguments[idx];	
	return s;
}

function Summa2(disc=1, ...args)
{
	let s=0;
	for (let arg of args)
		s+=arg;
	//for (let idx=0; idx < args.length; idx++)	s+=args[idx];
	return s*disc;
}




