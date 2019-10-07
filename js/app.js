const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const cpuInput = [];//Going to store the input of the game
const userInput = [];//Going to store the input of the user

//SOUNDS
let greenSound = new Audio();//The sound effect for the green button
greenSound.src = 'Sounds/GreenSound.mp3';

let redSound = new Audio();//Sound effect for the red button
redSound.src = 'Sounds/RedSound.mp3';

let yellowSound = new Audio();//Sound effect for the yellow button.
yellowSound.src = 'Sounds/YellowSound.mp3';

let blueSound = new Audio();//Sound effect for the blue button.
blueSound.src = 'Sounds/BlueSound.mp3';


//BUTTONS
startButton.addEventListener('click', (e) =>{
	game.startRound();
});

resetButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
});

greenButton.addEventListener('click', (e) =>{
	const green = e.target.id;//'green' is stored here
	sounds.playGreenSound();
	console.log(green);
});

redButton.addEventListener('click', (e) =>{
	const red = e.target.id;//'red' is stored here
	sounds.playRedSound();
	console.log(red);
});

yellowButton.addEventListener('click', (e) =>{
	const yellow = e.target.id;//'yellow' is stored here
	sounds.playYellowSound();
	console.log(yellow);
});

blueButton.addEventListener('click', (e) =>{
	const blue = e.target.id;//'blue' is stored here
	sounds.playBlueSound();
	console.log(blue);
});


const sounds = { //Houses the sound effect functions for the game
	playGreenSound(){ //Plays green sound effect
		greenSound.play(); 
	},

	playRedSound(){//Plays red sound effect
		redSound.play();
	},

	playYellowSound(){//Plays yellow sound effect
		yellowSound.play();
	},

	playBlueSound(){//Plays blue sound effect
		blueSound.play();
	}
}

const colors = {
	setGreenGlow(){
		greenButton.style.boxShadow = '0px -15px 90px rgba(128, 237, 133, .6)';
	},
	clearGreenGlow(){
		greenButton.style.boxShadow ='';
	}
}

// const glows = {
// 	greenGlow(){
// 		greenButton.style.backgroudColor = '#71e863'
// 	}
// }

// glows.greenGlow();


const game = {
	randomColor(){ //Picks a random color and plays its sound and makes its space glow.
		const colorValue = Math.ceil(Math.random() * 4);
		if (colorValue === 1){ // green
			sounds.playGreenSound();
			colors.setGreenGlow();
			setTimeout(colors.clearGreenGlow,1000);
			console.log(colorValue);
		} else if(colorValue === 2){ //red
			sounds.playRedSound();
			redButton.style.boxShadow = '0px -15px 90px rgba(237, 56, 51, .6)';
			console.log(colorValue);
		} else if(colorValue === 3){ //yellow
			sounds.playYellowSound();
			yellowButton.style.boxShadow = '0px -15px 90px rgba(249, 242, 80, .6)';
			console.log(colorValue);
		} else if(colorValue === 4){ //blue
			sounds.playBlueSound();
			blueButton.style.boxShadow = '0px -15px 90px rgba(101, 147, 234, .6)';
			console.log(colorValue);
		}
	},
	startRound(){
		if(cpuInput.length < 1){ //so long as the cpu input array is empty, the startRound function will run
			game.randomColor();//a random color should be selected. 
		}
	}
}










