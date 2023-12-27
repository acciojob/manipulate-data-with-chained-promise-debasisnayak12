function getArrays() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([1,2,3,4]);
		}, 3000);
	});
}
function filterOutOddNumber(arr) {
	return arr.filter((num) => num % 2 === 0);
}
function multiplyEvenNumber(arr) {
	return arr.map((num) => num % 2 === 0 ? num*2 : num);
}
function updateText(text) {
	const output = document.getElementById("output");
	output.innerText = text;
}

getArrays()
 .then((numbers) => {
	 return new Promise((resolve) => {
		setTimeout(() => {
			const filterNumber = filterOutOddNumber(numbers);
			updateText(`filter out odd number: ${filterNumber}`);
			resolve(filterNumber);
		}, 1000); 
	 });
 })
 .then((filterNumber) => {
	 return new Promise((resolve) => {
		setTimeout(() => {
			const multiplyNumber = multiplyEvenNumber(filterNumber);
			updateText(`multiply even number: ${multiplyNumber}`);
			resolve(multiplyNumber);
		}, 2000); 
	 });
 })
.catch((error) => {
	console.error("Error: ", error);
});