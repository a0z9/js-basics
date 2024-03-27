
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

