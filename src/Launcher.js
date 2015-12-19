var launcher = function(game)
{
	console.log("%cStarting Horse Racing...", "color:white; background:red");
};

launcher.prototype = 
{
	preload: function()
	{
		
	},

	create: function()
	{
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}