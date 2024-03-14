"use strict";

log("Functions...");

{
var counter = 0;
counter++;	

}

let c2 = 'global';
var d2 = 'global';

{
	let c2 = 'local';
	var d2 = 'local';
	log('c2='+c2); log("d2="+d2);
}
log('+'.repeat(20));
log('c2='+c2); log("d2="+d2);

log('-'.repeat(20));

//Самовыполняющиеся функции

(function f1(){ 
//c2="func"; //global c2
var c2="func1";
log("local c2 in func1 ->"+c2);
//...
})();

(function f2()
{
	var c2="func2";
	log("local c2 in func2 ->"+c2);
	//...
}());

log('c2='+c2); log("d2="+d2);


//Замыкания
// counter - сохраняется между вызовами!

const cc = function(){
	var count = 0;
	var c2 = function() { return ++count; };
	return c2;
};

// добавление самовызывающей функции
const mod1 = (function() {
	var count = 0;
	var c2 = function() { return ++count; };
	return c2;
})();

const mod2 = (()=>{var count = 0; return ()=>++count;})();


var count1 = cc();
log(count1());
log(count1());

// function arguments

function data(f1,a)
{
	//process data
	log(f1(a));
}



