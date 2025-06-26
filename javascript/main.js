/* ---------------------------------------------------------------------------------------------------------------------------------------------------
Aside, Content full height with JS && Sidebar burger listener
------------------------------------------------------------------------------------------------------------------------------------------------------*/
window.addEventListener("DOMContentLoaded", function () {
	const burger = this.document.getElementById("burger");
	const close = this.document.getElementById("menu-close");
	const menu = this.document.getElementById("menu-body");
	const overlay = this.document.getElementById("overlay-blur");
	const body = this.document.querySelector("body");

	burger.addEventListener("click", function () {
		menu.classList.add("active");
		burger.classList.add("active");
		overlay.classList.add("active");
		body.classList.add("no-scroll");
	});
	close.addEventListener("click", function () {
		menu.classList.remove("active");
		burger.classList.remove("active");
		overlay.classList.remove("active");
		body.classList.remove("no-scroll");
	});
});


/* --------------------------------------------------------------------------------------------------------------------------
Swiper 3d
-----------------------------------------------------------------------------------------------------------------------------*/
const swiperContainer = document.querySelector("#swiper");
if (swiperContainer) {
	const swiper = new Swiper("#swiper", {
		// allowTouchMove: false,
		loop: true,
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 3,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 120,
			modifier: 4,
			slideShadows: false,
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 4,
					slideShadows: false,
				},
			},
			576: {
				slidesPerView: 3,
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 120,
					modifier: 4,
					slideShadows: false,
				},
			},
		},
	});
	swiperContainer.addEventListener("click", function () {
		swiper.slideNext(); // Переключаемся на следующий слайд при клике
	});

	const eventsContents = document.querySelector("#events-contents");
	if (eventsContents) {
		const cont1 = document.querySelector("#content-1");
		const cont2 = document.querySelector("#content-2");
		const cont3 = document.querySelector("#content-3");
		const cont4 = document.querySelector("#content-4");
		const cont5 = document.querySelector("#content-5");
		const allContents = [cont1, cont2, cont3, cont4, cont5];

		swiper.on("slideChange", function () {
			const activeIndex = swiper.activeIndex;
			const activeSlide = swiper.slides[activeIndex];

			showContent();
			function showContent() {
				var numberPattern = /\d+/g;

				const nextId = activeSlide.getAttribute("id");
				const id = Number(nextId.match(numberPattern).join(""));

				allContents.forEach((cont) => {
					const d = cont.getAttribute("id");
					const contId = Number(d.match(numberPattern).join(""));

					if (contId == id) {
						cont.classList.add("show");
					} else {
						cont.classList.remove("show");
					}
				});
			}
		});
	}
}
