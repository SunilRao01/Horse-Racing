var race = function(game) {}

race.prototype = 
{
	preload: function()
	{
		this.game.load.image('bg', 'assets/bg.jpg');

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
		}
	}
}