
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

];

const cardsInPlay = [];
var score = 0;
function checkForMatch()
{
	
	if (cardsInPlay [0] === cardsInPlay[1])
	{
		score += 1;
		alert("You found a match!");
		var total = document.getElementById('result');
		total.innerHTML = score;
		
	} else {
		alert("Sorry, try again");
	}
}
function flipCard()
{
	let cardID = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

	this.setAttribute('src', cards[cardID].cardImage);
	this.setAttribute('class', 'flipped');
	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}
}
function createBoard()
{
	for (let i = 0; i < cards.length; i++)
	{
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
function myFunction(){location.reload();}


createBoard();

