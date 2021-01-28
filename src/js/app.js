// app.js 
const css = require('../scss/app.scss');

let people = document.getElementById('people');
let convers1 = document.getElementById('convers1');
let convers2 = document.getElementById('convers2');
let convers3 = document.getElementById('convers3');
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let txt3 = document.getElementById('txt3');

let txtconverse = document.getElementById('txt-converse');





// function parallax(element, distance, speed) {
// 	const item = document.querySelector(element);
// 	console.log(item);
// 	item.style.transform = `translateY(${distanse * speed})px`;
// }

// window.addEventListener('scroll', function () {
// 	parallax('people', window.scrollY, 1);
// 	parallax('.small-rose', window.scrollY, 1.5);
// 	parallax('.big-rose', window.scrollY, 1.0);
// });















function parallax(element, distance, speed) {

	const item = document.getElementById('element');
	// const item = document.querySelector('element');
	console.log(element);
	console.log(document.getElementById('people'));
	console.log(item);
	// item.style.transform = `translateY(${distance * speed}px)`;
	// console.log(item.style.transform);
}



window.addEventListener('scroll', function () {

	let value = window.scrollY;




	people.style.transform = "translateY(-" + value * 1 + "px)";
	people.style.transform = 'scale(' + (1 + value / 200) + ')';
	people.style.filter = 'blur(' + value * 0.04 + 'px) ' + 'grayscale(' + value * 0.3 + '%)';

	convers1.style.transform = "translate(-" + value * 0.2 + "px, " + value * 1.5 + "px) " + 'scale(' + (1 + value / 200) + ')';
	convers2.style.transform = "translate(" + value * 1.3 + "px," + value * 0.5 + "px) " + 'scale(' + (1 + value / 200) + ')';
	convers3.style.transform = 'scale(' + (1 + value / 100) + ')'

	txt1.style.transform = 'translateX(' + value * 1 + 'px)';
	txt2.style.transform = 'translateX(-' + value * 1 + 'px)';
	txt3.style.transform = 'translateX(' + value * 1 + 'px)';




})