

let o1 = {k1:'111','k2':1.2345, k3:[1,2-3], k4:{j1:'internal'}, 
"data values":[1,2,3-4]};

//Обход объекта

//1
for (let key in o1)	log(`o1.${key}=${o1[key]}`);
echo();
//2
for (let key of Object.keys(o1))	log(`o1.${key}=${o1[key]}`);
	
// values
log(Object.values(o1));

echo('+');

let o2 = o1; // reference copy!
log(o2)
o1.k1 ="Object o1";
log(o2);

echo();
// shallow copy
let o3 = {...o1};
o3.k2 = "o3 object";
log(o3);log(o1);

echo();
o3.k4.j1 = "o3";
log(o3);log(o1);

// full clone
//1
let o4 = JSON.parse(JSON.stringify(o1)); 
//2
let o5 = structuredClone(o1);


let student = {id:111, name:"Peter", age:25};



		