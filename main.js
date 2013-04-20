(function() {
	var menu = document.getElementById('menu');
	menu.getElementsByClassName('menu-button')[0].addEventListener('click', function(e) {
		e.preventDefault();
		var list = menu.getElementsByTagName('ul')[0];
		if (list.style.display == 'block') {
			list.style.display = '';
		} else {
			list.style.display = 'block';
		}
	})

	var slider = document.getElementById('slider');
	var slides = slider.getElementsByTagName('li');
	var sliderNav = document.getElementsByClassName('h--slider-nav')[0].getElementsByTagName('a');

	for(var i=0; i<sliderNav.length; i++){
		var slide = slides[i];
		sliderNav[i].addEventListener('click', function(e) {
			e.preventDefault();
			console.dir(slide);
		}, false);
	}
})();