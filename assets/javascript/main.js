const mobileNavbar = document.querySelector(
    ".mobile-navbar"
);
const openNavbar = document.querySelector(
    ".menu__mobile i"
);
const closeNavbar = document.querySelector(
    ".mobile-navbar__right"
);
const nodeActives = document.querySelectorAll(
    ".slider__scroll-icon--active"
);
const nodeBtns = document.querySelectorAll(
    ".slider__scroll-node"
);
const slider = document.querySelector(".slider__list");
const nextBtn = document.querySelector(
    ".slider__nav--next"
);
const prevBtn = document.querySelector(
    ".slider__nav--prev"
);
const project = document.querySelector(
    ".info__project-list"
);
const projectNodes = document.querySelectorAll(
    ".info__project-node"
);

var root = document.querySelector(":root");
var currentIndex = 0;

function start() {
    MobileNavbar();
    ScrollSliders();
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
// Scroll Sliders
function ScrollSliders() {
    nextBtn.addEventListener("click", function () {
        currentIndex =
            currentIndex < 3 ? currentIndex + 1 : 3;
        root.style.setProperty(
            "--currentIndex",
            currentIndex
        );
        slider.classList.add("slider");
        nodeActives.forEach((e) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active");
            }
        });
        nodeActives[currentIndex].classList.add("active");
    });
    prevBtn.addEventListener("click", function () {
        currentIndex =
            currentIndex > 0 ? currentIndex - 1 : 0;
        root.style.setProperty(
            "--currentIndex",
            currentIndex
        );
        slider.classList.add("slider");
        nodeActives.forEach((e) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active");
            }
        });
        nodeActives[currentIndex].classList.add("active");
    });
    nodeBtns.forEach((node, index) => {
        node.addEventListener("click", function () {
            var nodeActive = nodeActives[index];
            root.style.setProperty("--currentIndex", index);
            slider.classList.add("slider");
            nodeActives.forEach((e) => {
                if (e.classList.contains("active")) {
                    e.classList.remove("active");
                }
            });
            nodeActive.classList.add("active");
        });
    });
    projectNodes.forEach((node, index) => {
        node.addEventListener("click", () => {
            root.style.setProperty("--currentIndex", index);
            project.classList.add("project");
            projectNodes.forEach((e) => {
                if (e.classList.contains("node--current")) {
                    e.classList.remove("node--current");
                }
            });
            node.classList.add("node--current");
        });
    });
}
