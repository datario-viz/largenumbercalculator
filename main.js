// Multiplication
function multiplication() {
	/* Get the 2 numbers from the input box */
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	/* Slice them into arrays */
	var arr1 = num1.split("e");
	var arr2 = num2.split("e");

	/* Assign each item into two variables, one called a, the
	other called i */
	var a1 = arr1[0];
	var i1 = arr1[1];
	var a2 = arr2[0];
	var i2 = arr2[1];

	/* Convert them into numbers */
	var a1N = Number(a1);
	var i1N = Number(i1);
	var a2N = Number(a2);
	var i2N = Number(i2);

	/* Calculate the resultant a and n */
	var newA, newI;
	if (a1N * a2N >= 10) {
		newA = (a1N * a2N) / 10;
		newI = i1N + i2N + 1;
	} else {
		newA = a1N * a2N;
		newI = i1N + i2N;
	}

	/* Convert them into strings for later concatenation */
	var newAS = newA.toString();
	var newIS = newI.toString();

	/* Concatenate them into a new string, which is the result */
	var result = newAS + "e" + newIS;
	document.getElementById("result").innerHTML = result;
	console.log(result);
}

// Division
function division() {
	/* Generally it is the exact same as above, except this is 
	a division function, instead of a multiplication one. */
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var arr1 = num1.split("e");
	var arr2 = num2.split("e");
	var a1 = arr1[0];
	var i1 = arr1[1];
	var a2 = arr2[0];
	var i2 = arr2[1];
	var a1N = Number(a1);
	var i1N = Number(i1);
	var a2N = Number(a2);
	var i2N = Number(i2);
	var newA, newI;
	if (a1N / a2N < 1) {
		newA = (a1N / a2N) * 10;
		newI = i1N - i2N - 1;
	} else {
		newA = a1N / a2N;
		newI = i1N - i2N;
	}
	var newAS = newA.toString();
	var newIS = newI.toString();
	var result = newAS + "e" + newIS;
	document.getElementById("result").innerHTML = result;
	console.log(result);
}