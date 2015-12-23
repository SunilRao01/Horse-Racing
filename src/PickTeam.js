var pickTeam = function(game) {}

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
		var horses = [];
		// Horses
		for (var i = 0; i < 5; i++)
		{
			horses[i] = this.game.add.sprite(50, 50 + (i * 75), 'horse');
			horses[i].width = 105;
			horses[i].height = 67;
		}
		horses[1].tint = 0xffb366;
		horses[2].tint = 0x66ff66;
		horses[3].tint = 0x66b2ff;
		horses[4].tint = 0xff6666;

		// Horse stats
	}
}