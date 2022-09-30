const mobileNavbar = document.querySelector(".mobile-navbar");
const openNavbar = document.querySelector(".menu__mobile i");
const closeNavbar = document.querySelector(".mobile-navbar__right");

const project = document.querySelector(".info__project-list");
const projectNodes = document.querySelectorAll(".info__project-node");
const contains = document.querySelectorAll(".slider__container");
function start() {
    MobileNavbar();
    contains.forEach(e => Sliders(e));
    Projects();
}
start();

// Open, close navbar-mobile
function MobileNavbar() {
    openNavbar.addEventListener("click", function () {
        mobileNavbar.classList.add("open");
        mobileNavbar.classList.remove("close");
    });
    closeNavbar.addEventListener("click", function () {
        mobileNavbar.classList.add("close");
        mobileNavbar.classList.remove("open");
    });
}
// Slider
function Sliders(e) {
    const nodeActives = e.querySelectorAll(".slider__scroll-icon--active");
    const nodeBtns = e.querySelectorAll(".slider__scroll-node");
    const slider = e.querySelector(".slider__list");
    const sliders = e.querySelectorAll(".slider__item");
    const nextBtn = e.querySelector(".slider__nav--next");
    const prevBtn = e.querySelector(".slider__nav--prev");
    slider.classList.add("slider");
    let root = e.querySelector(".slider");
    root.style.setProperty("--lengthItem", sliders.length);
    let currentIndex = 0;
    let timer = 0;
    const interval = 5000;

    function autoSlider() {
        timer = setInterval(next, interval);
    }

    function next() {
        currentIndex = currentIndex < sliders.length - 1 ? currentIndex + 1 : sliders.length - 1;
        root.style.setProperty("--currentIndex", currentIndex);
        nodeActives.forEach((e) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active");
            }
        });
        nodeActives[currentIndex].classList.add("active");
        clearInterval(timer);
        timer = setInterval(next, interval);
    }

    function prev() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        root.style.setProperty("--currentIndex", currentIndex);
        nodeActives.forEach((e) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active");
            }
        });
        nodeActives[currentIndex].classList.add("active");
        clearInterval(timer);
        timer = setInterval(next, interval);
    }

    function node() {
        nodeBtns.forEach((btn, index) => {
            btn.addEventListener("click", function () {
                currentIndex = index;
                var nodeActive = nodeActives[currentIndex];
                root.style.setProperty("--currentIndex", currentIndex);
                nodeActives.forEach((e) => {
                    if (e.classList.contains("active")) {
                        e.classList.remove("active");
                    }
                    nodeActive.classList.add("active");
                });
                clearInterval(timer);
                timer = setInterval(next, interval);
            });
        });
    }

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
    node();
    autoSlider();
}

function Projects() {
    projectNodes.forEach((node, index) => {
        node.addEventListener("click", () => {
            project.classList.add("slider");
            let root = document.querySelector(".info__project-list.slider");
            root.style.setProperty("--lengthItem", projectNodes.length);
            root.style.setProperty("--currentIndex", index);
            projectNodes.forEach((e) => {
                if (e.classList.contains("node--current")) {
                    e.classList.remove("node--current");
                }
            });
            node.classList.add("node--current");
        });
    });
}
