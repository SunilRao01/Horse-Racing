var race = function(game) {}

var currentTeam;
var horseIndex = -1;
var displayHorse;

race.prototype = 
{
	preload: function()
	{
		this.game.load.image('bg', 'assets/bg.jpg');
		this.game.load.image('dice', 'assets/dice_ui.png')

	},
	create: function()
	{
		// Background
		this.game.add.image(0, 0, 'bg');

		// Text elements
		// Order sidebar
		var titleStyle = { font: "24px Merriweather", fill: "#ff", align: "center" };
		this.game.add.text(5, 5, "Order", titleStyle);
		for (var i = 0; i < teams.length; i++)
		{
			var orderHorse = this.game.add.sprite(12, 30 + (i * 40), teams[i].horse.key);
			orderHorse.tint = teams[i].horse.tint;
			orderHorse.width = 50;
			orderHorse.height = 30;
		}
		var line1 = new Phaser.Line(20, 0, 20, 200);

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

			tempHorse.animations.play('move', 30, true);
			teams[i].horse = tempHorse;
		}

		// Black horse starts first
		currentTeam = teams[0];

		this.updateDisplay();
	},
	updateDisplay: function()
	{
		// TODO: Display correct horse
		if (horseIndex == -1)
		{
			displayHorse = this.game.add.sprite(200, 300, standingHorse.key);
			displayHorse.tint = currentTeam.horse.tint;
			displayHorse.scale.x = displayHorse.scale.x * -1;
			horseIndex++;
		}
		else
		{
			horseIndex++;
			if (horseIndex > 4)
			{
				horseIndex = 0;
			}

			currentTeam = teams[horseIndex];
			displayHorse.tint = currentTeam.horse.tint;
		}

		// TODO: Display correct number of dice
		for (var i = 0; i < currentTeam.movement; i++)
		{
			var dice = this.game.add.sprite(250 + (i*50), 350, 'dice');
			dice.width = 32;
			dice.height = 32;
		}

		// TODO: Start rolling dice
	},
	rollDice: function()
	{

	},
	moveHorse: function()
	{

	}
}