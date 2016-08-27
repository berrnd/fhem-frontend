$(function ()
{
	$(".timestamp-moment").each(function ()
	{
		$(this).on("change", function ()
		{
			var element = $(this);
			var timestamp = element.innerText;
			element.text(moment(timestamp).fromNow());
		});
	});
});
