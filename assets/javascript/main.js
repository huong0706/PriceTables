const mobileNavbar = document.querySelector(".mobile-navbar");
const openNavbar = document.querySelector(".menu__mobile i");
const closeNavbar = document.querySelector(".mobile-navbar__right");
const nodeActives = document.querySelectorAll(".slider__scroll-icon--active");
const nodeBtns = document.querySelectorAll(".slider__scroll-node");
const slider = document.querySelector(".slider__list");
const sliders = document.querySelectorAll(".slider__item");
const nextBtn = document.querySelector(".slider__nav--next");
const prevBtn = document.querySelector(".slider__nav--prev");
const project = document.querySelector(".info__project-list");
const projectNodes = document.querySelectorAll(".info__project-node");
const interval = 5000;
var root = document.querySelector(":root");
var currentIndex = 0;
var currentNode = 0;
var timer = 0;

function start() {
    MobileNavbar();
    scrollSlider();
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
function scrollSlider() { 
    root.style.setProperty("--lengthItem", sliders.length);
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
    node();
    autoSlider();
}
function autoSlider() {
    timer = setInterval(next, interval);
}
function next() {
    currentIndex = currentIndex < sliders.length - 1 ? currentIndex + 1 : sliders.length - 1;
    root.style.setProperty("--currentIndex", currentIndex);
    slider.classList.add("slider");
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
    slider.classList.add("slider");
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
            var nodeActive = nodeActives[index];
            currentIndex = index;
            root.style.setProperty("--currentIndex", currentIndex);
            slider.classList.add("slider");
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
    projectNodes.forEach((node, index) => {
        node.addEventListener("click", () => {
            root.style.setProperty("--currentNode", index);
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
