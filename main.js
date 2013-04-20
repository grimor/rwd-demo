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
})();