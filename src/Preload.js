var preload = function(game) {}

preload.prototype = 
{
	preload: function()
	{
		// Load sprites here
	},

	create: function()
	{
		this.game.state.start("StartMenu");
	}
}