$(document).ready(function(){
Cufon.replace('h1, h2, p.white, p.text');
	
//-->BEGIN SCROLLABLE
	var slideshow = $('ul.nav').tabs('div.scrollable ul.items > li.item', {
		effect: 'fade',
		fadeOutSpeed: "fast",
		rotate: true
	}).slideshow({
		autoplay: true,
		interval: 5000
	});
	$('ul.nav li').live('click', function(){
		slideshow.stop();
	});
//-->END SCROLLABLE

	
});