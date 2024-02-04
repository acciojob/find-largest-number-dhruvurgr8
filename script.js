function findLargest(a, b, c) {
  let max;
	if(a>b && a>c){
		max = a;
	}else if(b>a && b>c){
		max = b;
	}else{
		max=c;
	}
	return max;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
