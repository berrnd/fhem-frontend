$(function()
{
	var pageId = $("body").data("page-id");
	var menuDiv = $("body").find("[data-nav-for-page='" + pageId + "']");
	menuDiv.addClass("bg-black");
});
