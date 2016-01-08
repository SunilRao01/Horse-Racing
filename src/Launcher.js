var launcher = function(game)
{
	console.log("%cStarting Horse Racing...", "color:white; background:red");
};

launcher.prototype = 
{
	preload: function()
	{
		this.game.load.image("loading","assets/loading_bar.png"); 
	},

	create: function()
	{
		this.game.state.start("Preload");
	}
}