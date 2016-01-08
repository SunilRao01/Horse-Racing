var startMenu = function(game) {}

var movingHorse;

startMenu.prototype = 
{
	playTheGame: function()
	{
		this.game.state.start("PickTeam");
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
		var startButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY+160, null, this.playTheGame, this);
		startButton.width = 100;

		title.anchor.set(0.5);
		creator.anchor.set(0.5);
		start.anchor.set(0.5);
		startButton.anchor.set(0.5);

		// Animated horse
		var horses = this.game.add.sprite(this.game.world.centerX - 92, this.game.world.centerY - 58.5, 'horses');
		horses.tint = 0x00;
		horses.animations.add('move');

		horses.animations.play('move', 20, true);
		movingHorse = horses;
	}

	
}