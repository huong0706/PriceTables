function start() {
    MobileNavbar();
    Sliders();
    Projects();
}
start();

function handleClass(nodes, index, className) {
    nodes.forEach((node) => {
        if (node.classList.contains(className)) {
            node.classList.remove(className);
        }
    });
    nodes[index].classList.add(className);
}
// Open, close navbar-mobile
function MobileNavbar() {
    const mobileNavbar = document.querySelector(".mobile-navbar");
    const openNavbar = document.querySelector(".menu__mobile i");
    const closeNavbar = document.querySelector(".mobile-navbar__right");
   
    function handleNavbar(isOpen) {
        if (isOpen === true) {
            mobileNavbar.classList.add("open");
            mobileNavbar.classList.remove("close");
        } else {
            mobileNavbar.classList.add("close");
            mobileNavbar.classList.remove("open");
        }
    }
    openNavbar.addEventListener("click", () => handleNavbar(true));
    closeNavbar.addEventListener("click", () => handleNavbar(false));
}
// Slider
function handleSlider(e) {
    const sliders = e.querySelectorAll(".slider__item");
    const slider = e.querySelector(".slider__list");
    const nextBtn = e.querySelector(".slider__nav--next");
    const prevBtn = e.querySelector(".slider__nav--prev");
    const nodeBtns = e.querySelectorAll(".slider__scroll-node");
    const nodeActives = e.querySelectorAll(".slider__scroll-icon--active");
    slider.classList.add("slider");
    const root = e.querySelector(".slider");
    const interval = 5000;
    let currentIndex = 0;
    let timer = 0;
    root.style.setProperty("--lengthItem", sliders.length);

    function autoSlider() {
        timer = setInterval(() => moveSlider(true), interval);
    }
    function moveSlider(isNext) {
        if (isNext === true) {
            currentIndex =
                currentIndex < sliders.length - 1 ? currentIndex + 1 : sliders.length - 1;
        } else {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        }
        root.style.setProperty("--currentIndex", currentIndex);
        handleClass(nodeActives, currentIndex, "active");
        clearInterval(timer);
        timer = setInterval(() => moveSlider(true), interval);
    }
    function nodeSlider() {
        nodeBtns.forEach((btn, index) => {
            btn.addEventListener("click", function () {
                currentIndex = index;
                root.style.setProperty("--currentIndex", currentIndex);
                handleClass(nodeActives, currentIndex, "active");
                clearInterval(timer);
                timer = setInterval(() => moveSlider(true), interval);
            });
        });
    }
    nextBtn.addEventListener("click", () => moveSlider(true));
    prevBtn.addEventListener("click", () => moveSlider(false));
    nodeSlider();
    autoSlider();
}
function Sliders() {
    const sliderContainers = document.querySelectorAll(".slider__container");
    sliderContainers.forEach((slider) => handleSlider(slider));
}
function Projects() {
    const project = document.querySelector(".info__project-list");
    const projectNodes = document.querySelectorAll(".info__project-node");
    let currentIndex = 0;
    
    projectNodes.forEach((node, index) => {
        node.addEventListener("click", () => {
            project.classList.add("slider");
            currentIndex = index;
            let root = document.querySelector(".info__project-list.slider");
            root.style.setProperty("--lengthItem", projectNodes.length);
            root.style.setProperty("--currentIndex", index);
            handleClass(projectNodes, currentIndex, "node--current");
        });
    });
}