
log("--------- arr ------------");
var arr = [12,33,-33,333,5,677,8];

//for (let i =0; i<arr.length; i++) log("arr["+i+"]="+arr[i]);
log(echoArray(arr));
arr.push(-100);
arr.unshift(20);
log(echoArray(arr));

arr.pop(); arr.pop();
arr.shift(); arr.shift();
log(echoArray(arr));

arr.splice(3,0,1000,1001);
log(echoArray(arr));

arr.length = 5;
log(echoArray(arr));

// spread as array addition
var arr2 = [...arr,2,3,4,5];
log(echoArray(arr2));

// Day 4 add..
log('+'.repeat(40));
arr = [12,33,-33,333,5,677,8,987,-3,-44,4];
log(echoArray(arr));
arr.forEach( (v,i,a) => a[i]++);
arr.forEach( function(v, i, a) {a[i]++;});
log(echoArray(arr));
var barr = arr.map((x)=>x*x);
log(echoArray(barr));
var carr = arr.filter((x)=>x>0);
log(echoArray(carr));

//
let all = [stud1,stud2,stud3,prepod];
//sort by id
all.sort((o1,o2)=>o1.id-o2.id);
// sort by name
all.sort((o1,o2)=>
{
	var n1 = o1.name.toLowerCase();
	var n2 = o2.name.toLowerCase();
	if (n1>n2)		return -1;
	else if (n2>n1)	return 1;
	return 0;
});





// [0:1,1:2,3:3,4]