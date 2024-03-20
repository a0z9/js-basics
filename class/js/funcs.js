
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

const Counter = function(){
	var counter = 0;
	//....
	const f1 = function() {return ++counter;};
	const f2 = function() {return counter;};
	return [f1,f2];
}




