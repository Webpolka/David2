
/* --------------------------------------------------------------------------------------------------------------------------
FANCYBOX
-----------------------------------------------------------------------------------------------------------------------------*/
Fancybox.bind("[data-fancybox]", {
	Carousel: {
		transition: "slide",
	},
	Images: {
		zoom: false,
	},
	showClass: "f-fadeIn",
});

/* --------------------------------------------------------------------------------------------------------------------------
Bird
-----------------------------------------------------------------------------------------------------------------------------*/
const bird = document.getElementById("bird");
if (bird) {
	const birdZone1 = document.querySelector(".about-post h1");
	const birdZone2 = document.querySelector(".masonry-grid-1");
	const birdZone3 = document.querySelector(".masonry-grid-2");
	const birdZoneArray = [birdZone1, birdZone2, birdZone3];

	birdZoneArray.forEach((el) => {
		el.addEventListener("click", function () {
			anime({
				targets: bird,
				translateX: "100%", // Move element to the right edge of the viewport							
				duration: 10000, // Animation duration in milliseconds
				easing: "easeOutExpo", // Easing function for a more dynamic feel
				complete: function (anim) {
					// Optional: Remove the element after the animation completes
					anim.animatables[0].target.remove();
					console.log("Animation complete! Element removed.");
				},
			});
		});
	});
}
