
//1
function sayGreets(name='Andrei'){
	//log("Hi!");
	log(`Hi, ${name}!`);
	
}

//2
let sayGreets2 = function(name)
{
	name = name || 'Basil';
	log("Hello, " + name +"!");
	
	//log(arr);
};

//3
let sayGreets3 = () => log("How do you do!");

//4
function sayGreets4()
{
	log(arguments);
	let name = arguments[0] || 'Peter';
	log(`Hi, ${name}!`);
}

//Замыкания

const Counter2 = function(){
	var counter = 0;
	//....
	const f1 = function() {return ++counter;};
	const f2 = function() {return counter;};
	return [f1,f2];
}

const Counter = (c=0)=>()=>++c;

const globalCounter =( (c=0)=>()=>++c )();

const globalCounter2 = (function() {
	var counter = 0;
	//....
	const f1 = function() {return ++counter;};
	const f2 = function() {return counter;};
	return [f1,f2];
})();


// function pass as arg

const Move = function(m,x,y){
	m(x,y); m(x+3,y);
}

const m1 = (x,y)=>log(`monster moves to point: (${x},${y}) `);
const m2 = (x,y)=>log(`player moves to point: (${x},${y}) `);


// Objects

const Counter3 = (c=0)=> {
	return{
	increment: ()=>++c,
	decrement: ()=>--c,
	reset:     ()=>c=0,
	get value(){return c;}	
	};
};


const C = ((c=0)=> {
	//...
	//...
	return{
		increment: ()=>++c,
		decrement: ()=>--c,
		reset:     ()=>c=0,
		get value(){return c;}
	};
})();






