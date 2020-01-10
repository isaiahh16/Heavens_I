// this is a self invoking anonymous function
//also called an iife
//also called a module (its a pattern)

(() => {
console.log('hello from JS!');


// find the elements in the document
let toggleButton = document.querySelector('.switch-text'),
	myHeading = document.querySelector('h1');
	svgImg = document.querySelector('#badge');

//this funtion should change the heading text
function changeText() {
	myHeading.textContent = "awesome website script";
}

// this fundtion should log the id for each svg to the console
function logSVG() {
	console.log(this.id);
}

toggleButton.addEventListener("click", changeText);
svgImg.addEventListener("mouseover", logSVG);

//document.querySelector('h1').textContent = "awesome website script"

})();