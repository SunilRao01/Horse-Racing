var race = function(game) {}

var currentTeam;
var horseIndex = -1;
var displayHorse;

var rollTimeCheck;
var calcTimeCheck;
var diceValues = [];
var diceSum;
var dice = [];
var diceValue;
var diceValueStyle;

const rollInterval = 50;
var rollingDice = true;
var calculatingDice = true;

var winner;

race.prototype = 
{
	create: function()
	{
		horseIndex = -1;

		// Background
		this.game.add.image(0, 0, 'bg');

		// Race display
		// Display teams on race track
		for (var i = 0; i < 5; i++)
		{
			// 18x,117
			var tempHorse = this.game.add.sprite(150, 30 + (i * 40), movingHorse.key);
			tempHorse.tint = teams[i].horse.tint;
			tempHorse.width = teams[i].horse.width;
			tempHorse.height = teams[i].horse.height;
			tempHorse.scale.x = tempHorse.scale.x * -1;

			tempHorse.animations.add('move');

			tempHorse.animations.play('move', 20, true);
			teams[i].horse = tempHorse;
		}

		// Add finish line
		this.game.add.image(600, 50, 'finish');

		// Black horse starts first
		currentTeam = teams[0];

		this.createDisplay();
	},
	createDisplay: function()
	{
		// Display correct horse
		displayHorse = this.game.add.sprite(200, 300, standingHorse.key);
		displayHorse.tint = currentTeam.horse.tint;
		displayHorse.scale.x = displayHorse.scale.x * -1;
		horseIndex++;


		// Display correct number of dice
		for (var i = 0; i < currentTeam.movement; i++)
		{
			dice[i] = this.game.add.sprite(250 + (i*50), 350, 'dice');
			dice[i].width = 32;
			dice[i].height = 32;

			diceValueStyle = { font: "32px Merriweather", fill: "#ff", align: "center" };
			diceValue = this.game.add.text(258 + (i*50), 350, "0", diceValueStyle);
			//diceValues = [];
			diceValues[i] = diceValue;
			diceValues[i].rolling = true;
		}

		var diceSumStyle = { font: "64px Merriweather", fill: "#ff", align: "center" };
		diceSum = this.game.add.text(258 + (diceValues.length*50), 350, 0, diceValueStyle)

		// Start rolling dice
		this.rollDice();
		this.calculateMovement();
	},
	updateDisplay: function()
	{
		// Check for winner
		if (currentTeam.horse.x > 600)
		{
			winner = currentTeam;
			this.game.state.start("Results");
		}

		// Reset dice sum
		diceSum.text = 0;

		// Display current team's horse
		horseIndex++;
		if (horseIndex > 4)			
		{
			horseIndex = 0;
		}
		currentTeam = teams[horseIndex];
		displayHorse.tint = currentTeam.horse.tint;

		// Remove previous dice
		for (var i = 0; i < dice.length; i++)
		{
			dice[i].kill();
			diceValues[i].kill();
		}

		diceSum.kill();

		// Display correct number of dice
		dice = [];
		diceValues = [];
		for (var i = 0; i < currentTeam.movement; i++)
		{
			dice[i] = this.game.add.sprite(250 + (i*50), 350, 'dice');
			dice[i].width = 32;
			dice[i].height = 32;

			diceValueStyle = { font: "32px Merriweather", fill: "#ff", align: "center" };
			diceValue = this.game.add.text(258 + (i*50), 350, "0", diceValueStyle);
			//diceValues = [];
			diceValues[i] = diceValue;
			diceValues[i].rolling = true;
		}

		var diceSumStyle = { font: "64px Merriweather", fill: "#ff", align: "center" };
		diceSum = this.game.add.text(258 + (diceValues.length*50), 350, 0, diceValueStyle)

		// Start rolling dice
		this.rollDice();
		this.calculateMovement();
	},
	update: function()
	{
		// Timer for rolling dice
		if (rollingDice)
		{
			if (this.game.time.now - rollTimeCheck > rollInterval)
			{
				for (var i = 0; i < diceValues.length; i++)
				{
					if (diceValues[i].rolling)
					{
						// Balance changes for last two horses to make it more balanced
						if (horseIndex == 4)
						{
							diceValues[i].text = this.game.rnd.integerInRange(5, 9);	
						}
						else if (horseIndex == 3)
						{
							diceValues[i].text = this.game.rnd.integerInRange(2, 6)
						}
						else
						{
							diceValues[i].text = this.game.rnd.integerInRange(1, currentTeam.luck + 1);
						}
					}
				}

				this.rollDice();
			}
		}

		if (calculatingDice)
		{
			// Timer for stopping and calculating dice
			if (this.game.time.now - calcTimeCheck > 1000)
			{
				var finished = true;
				for (var i = 0; i < diceValues.length; i++)
				{
					if (diceValues[i].rolling)
					{
						diceValues[i].rolling = false;
						finished = false;
						diceSum.text = parseInt(diceSum.text) + parseInt(diceValues[i].text);
						break;
					}
				}

				// Check if dice rolling is complete
				if (finished == true)
				{
					rollingDice = false;
					calculatingDice = false;
					this.moveHorse();
				}
				else
				{
					this.calculateMovement();
				}
			}
		}
	},
	rollDice: function()
	{
		rollingDice = true;
		rollTimeCheck = this.game.time.now;
	},
	calculateMovement: function()
	{
		calculatingDice = true;
		calcTimeCheck = this.game.time.now;
	},
	moveHorse: function()
	{
		// Tween horse forward
		var movementTween = this.game.add.tween(currentTeam.horse);
		movementTween.to({ x: ( currentTeam.horse.x + (20 * parseInt(diceSum.text)) ) }, 1000);
		movementTween.onComplete.add(this.updateDisplay, this);
		movementTween.start();
	}
}