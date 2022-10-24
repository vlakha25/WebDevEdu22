window.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu_item');

	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		});
	});

	function checkTouch() {
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch) {
			document.body.classList.add('touch');
			console.log('this is a touch device');
		} else {
			console.log('this is not a touch device');
			document.body.classList.add('no_touch');
		}
	}
	checkTouch();
});