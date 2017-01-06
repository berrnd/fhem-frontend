$(function ()
{
	var pageId = $("body").data("page-id");
	var menuDiv = $("body").find("[data-nav-for-page='" + pageId + "']");
	menuDiv.addClass("bg-black");
});

function toggleFullScreen()
{
	if (fullScreen)
	{
		document.mozCancelFullScreen();
	}
	else
	{
		document.documentElement.mozRequestFullScreen();
	}
}
