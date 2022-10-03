function start() {
    MobileNavbar();
    Sliders();
    Projects();
}
start();

function contain(obj, index, className) {
    obj.forEach((e) => {
        if (e.classList.contains(className)) {
            e.classList.remove(className);
        }
    });
    obj[index].classList.add(className);
}
// Open, close navbar-mobile
function MobileNavbar() {
    const mobileNavbar = document.querySelector(".mobile-navbar");
    const openNavbar = document.querySelector(".menu__mobile i");
    const closeNavbar = document.querySelector(".mobile-navbar__right");
    // flag = 1: open
    // flag = 0: close
    function handle(flag) {
        if (flag === 1) {
            mobileNavbar.classList.add("open");
            mobileNavbar.classList.remove("close");
        } else {
            mobileNavbar.classList.add("close");
            mobileNavbar.classList.remove("open");
        }
    }
    openNavbar.addEventListener("click", () => handle(1));
    closeNavbar.addEventListener("click", () => handle(0));
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
    let root = e.querySelector(".slider");
    let currentIndex = 0;
    let timer = 0;
    let interval = 5000;
    root.style.setProperty("--lengthItem", sliders.length);

    function autoSlider() {
        timer = setInterval(() => move(1), interval);
    }
    // flag = 1: next
    // flag = 0: prev
    function move(flag) {
        if (flag === 1) {
            currentIndex =
                currentIndex < sliders.length - 1 ? currentIndex + 1 : sliders.length - 1;
        } else {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        }
        root.style.setProperty("--currentIndex", currentIndex);
        contain(nodeActives, currentIndex, "active");
        clearInterval(timer);
        timer = setInterval(() => move(1), interval);
    }
    function node() {
        nodeBtns.forEach((btn, index) => {
            btn.addEventListener("click", function () {
                currentIndex = index;
                root.style.setProperty("--currentIndex", currentIndex);
                contain(nodeActives, currentIndex, "active");
                clearInterval(timer);
                timer = setInterval(() => move(1), interval);
            });
        });
    }
    nextBtn.addEventListener("click", () => move(1));
    prevBtn.addEventListener("click", () => move(0));
    node();
    autoSlider();
}
function Sliders() {
    const contains = document.querySelectorAll(".slider__container");
    contains.forEach((e) => handleSlider(e));
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
            contain(projectNodes, currentIndex, "node--current");
        });
    });
}