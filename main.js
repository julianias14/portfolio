console.log("JavaScript loaded");


/* =========================================================
   MODALS
   ========================================================= */

document.querySelectorAll(".open").forEach((btn) => {
    btn.addEventListener("click", () => {
        const modalId = btn.id.replace("open-", "");
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.add("show");
        }
    });
});


document.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal-container");

        if (modal) {
            modal.classList.remove("show");
        }
    });
});


/* =========================================================
   PROJECT / EXPERIENCE CAROUSELS
   ========================================================= */

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");

    const slides = Array.from(
        carousel.querySelectorAll(".carousel-slide")
    );

    const prevButton = carousel.querySelector(
        "[data-carousel-prev]"
    );

    const nextButton = carousel.querySelector(
        "[data-carousel-next]"
    );

    const currentDisplay = carousel.querySelector(
        "[data-carousel-current]"
    );

    const totalDisplay = carousel.querySelector(
        "[data-carousel-total]"
    );

    const figure = carousel.closest("figure");

    const captionDisplay = figure
        ? figure.querySelector("[data-carousel-caption]")
        : null;

    let currentIndex = 0;


    if (!track || slides.length === 0) {
        return;
    }


    if (totalDisplay) {
        totalDisplay.textContent = String(slides.length);
    }


    function updateCarousel() {
        track.style.transform =
            `translate3d(-${currentIndex * 100}%, 0, 0)`;

        if (currentDisplay) {
            currentDisplay.textContent =
                String(currentIndex + 1);
        }

        if (captionDisplay) {
            captionDisplay.textContent =
                slides[currentIndex].dataset.caption || "";
        }
    }


    function showNextSlide() {
        currentIndex =
            (currentIndex + 1) % slides.length;

        updateCarousel();
    }


    function showPreviousSlide() {
        currentIndex =
            (currentIndex - 1 + slides.length) % slides.length;

        updateCarousel();
    }


    if (nextButton) {
        nextButton.addEventListener(
            "click",
            showNextSlide
        );
    }


    if (prevButton) {
        prevButton.addEventListener(
            "click",
            showPreviousSlide
        );
    }


    updateCarousel();
});