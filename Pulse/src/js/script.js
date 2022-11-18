// tiny-slider
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	controls: false,
	// autoplay: true,
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

// Tabs
const catalogTab = document.querySelectorAll('.catalog__tab'),
	catalogContent = document.querySelectorAll('.catalog__content');

catalogTab.forEach((item, i) => {
	item.addEventListener('click', () => {
		catalogTab.forEach(item => {
			item.classList.remove('catalog__tab_active');
		});
		item.classList.add('catalog__tab_active');
		catalogContent.forEach(item => {
			item.classList.remove('catalog__content_active');
		});
		catalogContent[i].classList.add('catalog__content_active');
	});
});

// item links
const catalogItemLinks = document.querySelectorAll('.catalog-item__link'),
	catalogItemBack = document.querySelectorAll('.catalog-item__back'),
	catalogItemContent = document.querySelectorAll('.catalog-item__content'),
	catalogItemList = document.querySelectorAll('.catalog-item__list');

// toggle slide
function toggleSlide(item) {
	item.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			catalogItemContent[i].classList.toggle('catalog-item__content_active');
			catalogItemList[i].classList.toggle('catalog-item__list_active');
		});
	});
}
toggleSlide(catalogItemLinks);
toggleSlide(catalogItemBack);

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