const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplay: true,
	nav: true,
	navPosition: 'bottom',
	autoplayButtonOutput: false,
	autoplayHoverPause: true,
	autoplayTimeout: 5000,
	speed: 1500,
	mouseDrag: true,
	preventScrollOnTouch: 'auto',
	preventActionWhenRunning: true,
	responsive: {
		992: {
			nav: false,
		}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});

let activeWidth = document.querySelector('.tns-slide-active'),
	sliderInner = document.querySelector('.carousel__inner');

function autoHeight() {
	let newH = activeWidth.clientWidth * ( 580 / 750 );
	sliderInner.style.height = newH + 'px';
}
autoHeight();