"use strict";

(function innit() {
  // variables
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerLine1 = document.querySelector(".menu-bar1");
  const hamburgerLine2 = document.querySelector(".menu-bar2");
  const menuMobile = document.querySelector(".menu-mobile");
  const link = document.querySelectorAll(".link");
  const video = document.querySelector("video");
  const backdrop = document.querySelector(".backdrop");
  const closeGalleryBtn = document.querySelector(".close-btn");
  const nextImageBtn = document.querySelector(".next");
  const previousImageBtn = document.querySelector(".prev");
  const body = document.querySelector("body");

  // slow down video
  video.playbackRate = 0.3;

  function toggleMenu() {
    hamburgerLine1.classList.toggle("active");
    hamburgerLine2.classList.toggle("active");
    menuMobile.classList.toggle("active");
  }

  // open - close mobile menu
  hamburgerMenu.addEventListener("click", toggleMenu);

  // close menu after click on each link
  link.forEach(function handleLinkClick(anchor) {
    anchor.addEventListener("click", toggleMenu);
  });

  function slideShow() {
    let currentSlide;
    const images = Array.from(document.querySelectorAll("picture img"));
    const currentImage = document.querySelector(".current-image");

    function openGallery(currentSlide) {
      backdrop.classList.add("visible");
      body.classList.add("hidden");
      currentImage.src = images[currentSlide].src;
    }

    function closeGallery() {
      closeGalleryBtn.addEventListener("click", function handleClick() {
        backdrop.classList.remove("visible");
        body.classList.remove("hidden");
      });

      document.addEventListener("keydown", function handleKeyDown(e) {
        if (e.key === "Escape") {
          backdrop.classList.remove("visible");
        }
      });
    }

    function goToNextSlide() {
      currentSlide === images.length - 1 ? (currentSlide = 0) : currentSlide++;
      openGallery(currentSlide);
    }

    function goToPrevSlide() {
      currentSlide === 0 ? (currentSlide = images.length - 1) : currentSlide--;
      openGallery(currentSlide);
    }

    function handleControls() {
      document.addEventListener("keydown", function handleKeyboardKeys(e) {
        if (e.key === "ArrowRight") goToNextSlide();
        if (e.key === "ArrowLeft") goToPrevSlide();
      });

      nextImageBtn.addEventListener("click", goToNextSlide);
      previousImageBtn.addEventListener("click", goToPrevSlide);
    }

    images.forEach(function handleClickedImage(image, index) {
      image.addEventListener("click", () => {
        currentSlide = index;
        openGallery(currentSlide);
      });
    });

    closeGallery();
    handleControls();
  }

  slideShow();
})();

(function setCurrentYear() {
  const currentYear = `<time>
    &copy; ${new Date().getFullYear()}</time>
    <span>Created with passion by Paw - All Rights Reserved
  </span>`;

  document.querySelector(".copyright").innerHTML = currentYear;
})();
