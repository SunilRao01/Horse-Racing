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
		this.game.state.start("Preload");
	}
}