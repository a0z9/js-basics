
const log = console.log;

function mult(){
	
	const Ni=11; Nj=11;
	let s1 = "";
	for (let j=1; j<Nj; j++)
		s1+="\t"+j;
	log(s1);
	for (let i=1; i<Ni; i++) {
		s1 = i+"";
		for (let j=1; j<Nj; j++) {
			s1 += "\t" + (i*j);
		}
		log(s1);
	}

}

function Summa(){
	//let s = (typeof arguments[0] == "string")?'':0;
	let s = (typeof arguments[0] == "number")?0:'';
	for (let val of arguments)	s+=val;
	return s;
}


function Summa2(isNum=true,...arr)
{
	let s = isNum?0:'';
	for (let val of arr) s+=val;
	return s;
}


