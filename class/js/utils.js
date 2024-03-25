
const log = console.log;

const echo = (s='-',N=35)=>log(s.repeat(N));

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


function ms2HMS(ms,isDay=false){
	
	const toLeadZero=(n)=>(n<10)?'0'+n:''+n;
	const milliseconds = ms%1000;
	const all_seconds = Math.floor(ms/1000);
	let seconds = all_seconds%60;
	let minutes = Math.floor(all_seconds/60)%60; 
	let hours =   Math.floor(all_seconds/3600)%24;

	
	seconds = toLeadZero(seconds);
	minutes = toLeadZero(minutes);
	hours =   toLeadZero(hours);
	
	const hms=`${hours}:${minutes}:${seconds}.${milliseconds}`;
	
	if (isDay) {
		let days =   Math.floor(all_seconds/3600/24);
		var d = (days==1)?'day':'days';
		return `${d}: ${days}, ${hms}`; }
	
	return `${hms}`; 
	}



