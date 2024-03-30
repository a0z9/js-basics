const log=console.log;

const pa = (arr=[])=>log(`[${arr}]`);

const mult=()=>{
	//    1  2  3  4 .. 10
	// 1  1  2  3 ...
	// 2  2  4  6 ...
	// 3  3  6  9 ...
	// ...
	// 10

	Ni=12; Nj=12;

	let s = '';
	for (let i=1; i<=Ni; i++)
		s+='\t'+i;
	log(s);

	for (let j=1; j<=Nj; j++) {
		s = j;
		for (let i=1; i<=Ni; i++) {
			s=s+'\t'+j*i;
		}
		log(s);
	};


}

function rgb(r=255, g=255, b=255)
{
	toHex=(a)=> (a>15)?a.toString(16):'0'+ a.toString(16);
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
