var startMenu = function(game) {}

startMenu.prototype = 
{
	preload: function()
	{
		this.game.load.image('bg', 'assets/bg.jpg');
		this.game.load.image('horse', 'assets/horse/horse1.png');
	},
	create: function()
	{
		// Background
		this.game.add.image(0, 0, 'bg');

		// Text
		var titleStyle = { font: "64px Merriweather", fill: "#ff", align: "center" };
		var creatorStyle = { font: "16px Merriweather", fill: "#ff", align: "center"};
		var startStyle = { font: "32px Merriweather", fill: "#ff", align: "center" };

		var title = this.game.add.text(this.game.world.centerX, this.game.world.centerY-160,
								   "Horse Racing", titleStyle);
		var creator = this.game.add.text(this.game.world.centerX, this.game.world.centerY-120,
								   "A game by Sunil Rao", creatorStyle);
		var start = this.game.add.text(this.game.world.centerX, this.game.world.centerY+160,
								   "Start", startStyle);

		title.anchor.set(0.5);
		creator.anchor.set(0.5);
		start.anchor.set(0.5);

		// Animated horse
		var horseSprite = this.game.add.sprite(this.game.world.centerX - 91, this.game.world.centerY - 58, 'horse');
	}
}