var results = function(game) {}

results.prototype = 
{
	create: function()
	{
		// Background
		this.game.add.image(0, 0, 'bg');

		// Title
		var titleStyle = { font: "64px Merriweather", fill: "#ff", align: "center" };
		var titleText = this.game.add.text(this.game.world.centerX/2, 5, "Winner", titleStyle);

		var winnerSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, winner.horse.key);
		winnerSprite.tint = winner.horse.tint;
		winnerSprite.anchor.set(0.5);

		if (chosenTeam.tint == winner.horse.tint)
		{
			titleText.text = "You won!";
		}
		else
		{
			titleText.text = "You lost!";
		}

		// Play again button
		var playAgainStyle = { font: "32px Merriweather", fill: "#ff", align: "center" };
		var playAgain = this.game.add.text(this.game.world.centerX, this.game.world.centerY+160,
								   "Play Again", playAgainStyle);
		var playAgainButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY+160, null, this.restartGame, this);
		playAgainButton.width = 100;
		playAgain.anchor.set(0.5);
		playAgainButton.anchor.set(0.5);
	},

	restartGame: function()
	{
		this.game.state.start("PickTeam");
	}
}