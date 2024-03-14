log("cycles included...");
"use strict";

// for

var N = 5;
var i =99;

for (let i =0; i<N ; i++) {
	log("i="+i);
}
log("-".repeat(15));

for (let i =N-1; i>=0 ; i--){
	log("i="+i);
	//....
}
//for (let i =N-1; i>=0 ; i--) log("i="+i);
//for (let i =N-1; i>=0 ; log("i="+ i--));

// эквивалент - беск цикл с выходом
//String.prototype.repeat()
log('+'.repeat(25));
{
	let i = N-1;
	for (;;)
	{
		if (i<0) break;
		log("i2=" +i);
		//...
		--i;
	}
}

log('o'.repeat(25));
let j = 0;
while (j<N) {
	log("j="+ j);
	j++;
}

log('c'.repeat(25));
j=-1;
while (++j<=10) {
	//if (j%2!=0) continue;	
	//log("j="+ j);
	if (j%2==0)	log("j="+ j);
			
	//...
}

j=-1;
while (true) {
	if (++j>10)	break;
	if (j%2==0)	log("j="+ j);
}

//-----------
log('@'.repeat(25));
j=0;
do {
	if (j%2==0)
		log("j="+ j);
} 
while (++j<=10);
	
//------------

outer:
for (let k=0; k<25; k++){
	for (let i=0; i<25; i++){
		if(i*k == i+k+5)
		{
			log("match!","k="+k,"i="+i);
			break outer;
		}
	}
}

	



