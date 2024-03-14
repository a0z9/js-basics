const log=console.log;

const echoArray = function(arr=[])
{
	//if(typeof arr != array)
	if (arr.length==0)	return '[]';
	
	var s = "[";
	for (let idx in arr) {
		s+=arr[idx]+","
	}
	s=s.slice(0,-1);
//  s=s.substring(0,s.length-1);	
	return s+"]";	
	
};

const summa=function(){
	if (arguments.length==0)
		return 0;
	let s = 0;
	if (typeof arguments[0] == 'string') s = "";
	for (let idx in arguments)	s+=arguments[idx];
	return s;
}

const summa2=function(msg,...args) {
	//log(echoArray(arguments));
	if (args.length==0)
		return 0;
	let s = 0;
	if (typeof args[0] == 'string')	s = "";
	for (let idx in args) s+=args[idx];
	log(msg);
	return s;
}

// Счётчик
const counter = ()=>{
	let c = 0;
	return {
	  increment: ()=>++c,
	  decrement: ()=>--c,
	  reset: ()=>c=0,
	  set value(val){ c = val; return c;},
	  get value(){return c;}	
    };
};

const Counter0 = ()=>{
	let c = 0;
	return {
		increment: ()=>++c,
		//decrement: ()=>--c,
		reset: ()=>c=0,
		//set value(val){ c = val; return c;},
		get value(){return c;}
	};
};

const Counter = (c=0)=>{
	return {
		increment: ()=>++c,
		decrement: ()=>--c,
		reset: ()=>c=0,
		set value(val){ c = val; return c;},
		get value(){return c;}
	};
};

// Аналог
const counter2 = function(){
	let c = 0;
	return {
		count: function() {return ++c;},
		reset: function() {c=0;},
		getc: function() {return c;}
	};
};



//....