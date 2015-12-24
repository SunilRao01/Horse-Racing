var results = function(game) {}

results.prototype = 
{
	preload: function()
	{
		this.game.load.image('bg', 'assets/bg.jpg');
	},
	create: function()
	{
		// Background
		this.game.add.image(0, 0, 'bg');

		var titleStyle = { font: "64px Merriweather", fill: "#ff", align: "center" };
		this.game.add.text(this.game.world.centerX/2, 5, "Winner", titleStyle);

		var winnerSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, winner.horse.key);
		winnerSprite.tint = winner.horse.tint;
		winnerSprite.anchor = 0.5;
	}
}