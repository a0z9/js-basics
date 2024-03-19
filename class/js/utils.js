
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