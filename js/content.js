 
$(document).ready(function() {

	// var seemore = $("._5my2 ._5my9 ._3uz4");
	// console.log(seemore);
	// seemore.click();

	var news = "https://www.reddit.com/r/UpliftingNews/hot.json?sort=new";

	$.getJSON(news, function(data) {
		var pagelet = $("#pagelet_trending_tags_and_topics");
		var links = $("._4qzh, ._5v0t, ._7ge");
		links.css("font-weight", "bold");

		links.each(function(i, link) {
    		link.href = data.data.children[i].data.url;
    		link.text = data.data.children[i].data.title;
		});
	});

	// var feed = $("#pagelet_trending_tags_and_topics");
	// feed.remove();
});