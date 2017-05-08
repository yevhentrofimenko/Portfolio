$(document).ready(function(){
var container = $(".masonry-container");

container.imagesLoaded(function(){

	container.masonry({
	itemSelector:'.itemH',
	columnWidth: ".itemH",
	percentPosition:true
	});
	});
});