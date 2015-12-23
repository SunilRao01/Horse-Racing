var pickTeam = function(game) {}

function team (inputHorse)
{
	this.movement = 5;
	this.luck = 1;
	this.horse = inputHorse;
}

var teams = [];
var chosenTeam;
var standingHorse;

pickTeam.prototype = 
{
	preload: function()
	{
		this.game.load.image('bg', 'assets/bg.jpg');
		this.game.load.image('horse', 'assets/horse/standing_horse.png?v=1');
	},
	horseHoverEnter: function(currentHorse)
	{
		currentHorse.width += 20;
		currentHorse.height += 20;
	},
	horseHoverExit: function(currentHorse)
	{
		currentHorse.width -= 20;
		currentHorse.height -= 20;
	},
	horseSelect: function(currentHorse)
	{
		currentHorse.width -= 20;
		currentHorse.height -= 20;
		chosenTeam = currentHorse;
		chosenTeam.inputEnabled = false;
		standingHorse.inputEnabled = false;

		this.game.state.start("Race");
	},
	create: function()
	{
		// Background
		this.game.add.image(0, 0, 'bg');

		// Title
		var titleStyle = { font: "64px Merriweather", fill: "#ff", align: "center" };
		this.game.add.text(this.game.world.centerX/2, 5, "Pick a Team", titleStyle);

		// Horses
		for (var i = 0; i < 5; i++)
		{
			var tempHorse;
			tempHorse = this.game.add.sprite(this.game.world.centerX - 200, 70 + (i * 75), 'horse');
			tempHorse.width = 105;
			tempHorse.height = 67;

			tempHorse.inputEnabled = true;

			tempHorse.events.onInputOver.add(this.horseHoverEnter, this);
			tempHorse.events.onInputOut.add(this.horseHoverExit, this);
			tempHorse.events.onInputUp.add(this.horseSelect, this);



			var tempTeam = new team(tempHorse);
			tempTeam.movement -= i;
			tempTeam.luck += i;

			// Set individual colors
			switch (i)
			{
				case 0:
					tempTeam.horse.tint = 0x00;
					standingHorse = tempHorse;
					break;
				case 1:
					tempTeam.horse.tint = 0xff9900;
					break;
				case 2:
					tempTeam.horse.tint = 0x009900;
					break;
				case 3:
					tempTeam.horse.tint = 0xff;
					break;
				case 4:
					tempTeam.horse.tint = 0xff6666;
					break;
			}

			teams[i] = tempTeam;
		}


		// Horse stats
		var statsStyle = { font: "24px Merriweather", fill: "#ff", align: "center" };
		for (var i = 0; i < 5; i++)
		{
			this.game.add.text(this.game.world.centerX - 120, 100 + (i * 75),
								   "Movement: ", statsStyle);
			this.game.add.text(this.game.world.centerX - 0, 100 + (i * 75),
								   teams[i].movement, statsStyle);

			this.game.add.text(this.game.world.centerX + 50, 100 + (i * 75),
								   "Luck: ", statsStyle);
			this.game.add.text(this.game.world.centerX + 120, 100 + (i * 75),
								   teams[i].luck, statsStyle);
		}
	}
}