var pickTeam = function(game) {}

var team1 = 
{
	color: 0xff,
	movement: 5,
	luck: 1
}

var team2 = 
{
	color: 0xffb366,
	movement: 4,
	luck: 2
}

var team3 = 
{
	color: 0x66ff66,
	movement: 3,
	luck: 3
}

var team4 = 
{
	color: 0x66b2ff,
	movement: 2,
	luck: 4
}

var team5 = 
{
	color: 0xff6666,
	movement: 1,
	luck: 5
}

var teams = [team1, team2, team3, team4, team5];

pickTeam.prototype = 
{
	preload: function()
	{
		this.game.load.image('bg', 'assets/bg.jpg');
		this.game.load.image('horse', 'assets/horse/standing_horse.png?v=1');
	},
	create: function()
	{
		// Background
		this.game.add.image(0, 0, 'bg');

		// Title
		var titleStyle = { font: "64px Merriweather", fill: "#ff", align: "center" };
		var title = this.game.add.text(this.game.world.centerX/2, 5, "Pick a Team", titleStyle);

		// Horses
		var horses = [];
		for (var i = 0; i < 5; i++)
		{
			horses[i] = this.game.add.sprite(this.game.world.centerX - 200, 70 + (i * 75), 'horse');
			horses[i].width = 105;
			horses[i].height = 67;
		}
		horses[0].tint = team1.color;
		horses[1].tint = team2.color;
		horses[2].tint = team3.color;
		horses[3].tint = team4.color;
		horses[4].tint = team5.color;

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