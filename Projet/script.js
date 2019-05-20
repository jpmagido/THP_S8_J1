// Fonctionnalité 1 + 1 bis

var footer = document.querySelector('footer');

footer.addEventListener('click', function ClickOnFooter(){
		var countClick = 0;
		countClick++
		console.log(countClick);

	}
);
	
	
// Fonctionnalité 2

var navbar = document.getElementById('navbarHeader');

var button = document.querySelector('.navbar-toggler-icon');

button.addEventListener('click', function removeCollapse(){
	if (navbar.className == "collapse bg-dark") {
		navbar.className = "bg-dark";
	}
	else if (navbar.className == "bg-dark") {
		navbar.className = "collapse bg-dark";
	}
	}
);

// Fonctionnalité 3

var button = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
var cardText = document.getElementsByClassName("card-text");

button[0].addEventListener('click', function ChangeColorRed(){
	cardText[0].style.color = "red";
	}
);

// Fonctionnalité 4


var colorOfText = true;

button[1].addEventListener('click', colorToggle)

function colorToggle(){
	if (colorOfText == true) {
		cardText[1].style.color = "green";
		colorOfText = false;
	}
	else if (colorOfText == false) {
		cardText[1].style.color = "black";
		colorOfText = true;
	}
}



// Fonctionnalité 5


var navb = document.querySelector('.navbar.navbar-dark.bg-dark.box-shadow');

navb.addEventListener('dblclick', RemoveStyle);
var activeStyle = true;


function RemoveStyle() {
	document.styleSheets[0].disabled = true;
	if (activeStyle == true) {
		document.styleSheets[0].disabled = true;
		activeStyle = false;
		navb.style.border = "thick solid #0000FF";
	}
	else if (activeStyle == false) {
		document.styleSheets[0].disabled = false;
		activeStyle = true;
		navb.style.border = null;

	}
};



// Fonctionnalité 6

var allCards = document.querySelector(".btn.btn-sm.btn-success");
var textCard = document.querySelector('.card-text');
var imgCard = document.querySelector(".card-img-top");
var changeSize = true;

allCards.addEventListener('mouseover', functionTest);

function functionTest() {

	if (changeSize == true) {
	textCard.style.fontSize = "x-small";
	imgCard.style.height = "60px";
	imgCard.style.width = "80px";
	changeSize = false;
	}
	else if (changeSize == false) {
	textCard.style.fontSize = null;
	imgCard.style.height = null;
	imgCard.style.width = null ;
	changeSize = true;
	}
};


// Fonctionnalité 7


let allcards = document.getElementsByClassName("col-md-4");
let parent = document.getElementsByClassName("row")[1];
let bouton = document.querySelector("main").querySelectorAll("a")[1];

bouton.addEventListener("click", changeIndexCard);
function changeIndexCard(){
let movingCard = allcards[allcards.length-1]
parent.insertBefore(movingCard, allcards[0])
}


// Fonctionnalité 8



let boutonBack = document.querySelector("main").querySelectorAll("a")[0];
let linkBack = document.querySelector(".btn.btn-primary.my-2");

linkBack.addEventListener("click", changeLink);

function changeLink() {
	linkBack.href = "#";
}

boutonBack.addEventListener("click", changeIndexCard);
function changeIndexCard(){
let movingCard = allcards[allcards.length-1]
parent.insertBefore(movingCard, allcards[0])
}








