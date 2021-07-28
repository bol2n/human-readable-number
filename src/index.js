module.exports = function toReadable (number) {
	let arr = ["zero","one","two","three","four","five","six","seven","eight","nine", "ten",
	"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
	"nineteen", "ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
	"hundred"];
	let a = String(number);
	let num = [];
	for (let i = 0; i < a.length; i++) {
		num.push(+a[i]);
	}
	if ((num.length == 3) && (num[1] == 0) && (num[2] == 0)) {
		return `${arr[num[0]]} ${arr[arr.length-1]}`;  
	}
	if ((num.length == 3) && (num[1] == 1)) {
		return `${arr[num[0]]} ${arr[arr.length-1]} ${arr[10 + num[2]]}`;  
	}
	if ((num.length == 3) && (num[1] == 0)) {
		return `${arr[num[0]]} ${arr[arr.length-1]} ${arr[num[2]]}`;  
	}
	if ((num.length == 3) && (num[2] == 0)) {
		return `${arr[num[0]]} ${arr[arr.length-1]} ${arr[19 + num[1]]}`;  
	}
	if (num.length == 3) {
		return `${arr[num[0]]} ${arr[arr.length-1]} ${arr[19 + num[1]]} ${arr[num[2]]}`;  
	}
	if ((num.length == 2) && (num[1] == 0)) {
		return `${arr[19 + num[0]]}`;  
	}
	if ((num.length == 2) && (num[0] == 1)) {
		return `${arr[10 + num[1]]}`;  
	}
	if (num.length == 2) {
		return `${arr[19 + num[0]]} ${arr[num[1]]}`;  
	}
	else {
		return `${arr[num[0]]}`;
	}
}
