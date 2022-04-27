document.addEventListener("DOMContentLoaded", () => {
	let squares = document.querySelectorAll(".square");    
    let resetButton = document.querySelector("#button");

    resetButton.addEventListener("click", resetGame);

	squares.forEach((square) => {
		square.addEventListener("click", handleClick);
	});
});

function handleClick(event) {
	let square = event.target;
	let position = square.id;

	if (handleMove(position)) {
		setTimeout(() => {
			alert("O jogo acabou!");
		});
	}
	updateSquares();
}

function updateSquares() {
	let squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		let position = square.id;
		let symbol = board[position];

		if (symbol != "") {
			square.innerHTML = `<div class='${symbol}'></div>`;
		}
	});
}

function resetGame(){
    let squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		let position = square.id;
		let symbol = board[position];

		if (symbol != "") {
			square.innerHTML = "";
		}

        setTimeout(() => {
            board[position] = "";

        })
	});

    playerTime = 0;
    gameOver = false;
}