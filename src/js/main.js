import '../scss/style.scss'

// burger
(function () {
	const isOpen = document.querySelector(".header__inner-burger")
	const isClose = document.querySelector(".header__nav-close")
	const navigation = document.querySelector(".header__nav")

	isOpen.addEventListener('click', () => {
		navigation.classList.add('active')
	})

	isClose.addEventListener('click', () => {
		navigation.classList.remove('active')
	})
})();

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    pagination: {
      el: ".swiper-pagination",
    },
});