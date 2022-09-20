const mobileNavbar =  document.querySelector('.mobile-navbar');
const openNavbar =  document.querySelector('.menu__mobile i');
const closeNavbar =  document.querySelector('.mobile-navbar__right');

const nodeLists =  document.querySelectorAll('.slider__scroll-node');
const nodeActives =  document.querySelectorAll('.slider__scroll-icon--active');
const sliders =  document.querySelectorAll('.slider__item');
const nextSlider =  document.querySelector('.slider__nav--next');
const backSlider =  document.querySelector('.slider__nav--back');

const projectNodes = document.querySelectorAll('.info__project-node');
const projectLists = document.querySelectorAll('.info__project-list');

let indexCurrent = 0;
let nodeCurrent = 0;

function start() {
    MobileNavbar();
    ScrollSliders();
}
start()

// Open, close navbar-mobile
function MobileNavbar() {
    openNavbar.addEventListener('click', function(){
        mobileNavbar.classList.remove('hidden');
    });
    closeNavbar.addEventListener('click', function() {
        mobileNavbar.classList.add('hidden');   
    });
}

// Scroll Sliders
function ScrollSliders() {
    for (var i = 0  ; i < nodeActives.length; i++) {
        if (nodeActives[i].className == 'slider__scroll-icon--active active') {
            indexCurrent = i;
            sliders[indexCurrent].classList.add('active');
        }
    }

    nodeLists.forEach( (node, index ) => {
        node.addEventListener('click', function() {
            const slider = sliders[index];
            const nodeActive = nodeActives[index]
            if ('.slider__item.active') {
                 document.querySelector('.slider__item.active').classList.remove('active');
            }
            if ('.slider__scroll-icon--active.active') {
                 document.querySelector('.slider__scroll-icon--active.active').classList.remove('active');
            }
            if (index > indexCurrent) {
                slider.style.animation = 'tonext 1s linear';
            }else {
                slider.style.animation = 'toback 1s linear';
            }
            slider.classList.add('active');
            nodeActive.classList.add('active');
            indexCurrent = index;
        });
    });

    
    nextSlider.addEventListener('click',() => {
        if ('.slider__item.active') {
            document.querySelector('.slider__item.active').classList.remove('active');

       }
       if ('.slider__scroll-icon--active.active') {
            document.querySelector('.slider__scroll-icon--active.active').classList.remove('active');
       }
       indexCurrent = (indexCurrent + 1) % sliders.length;
       nodeActives[indexCurrent].classList.add('active');
       sliders[indexCurrent].classList.add('active');
       sliders[indexCurrent].style.animation = 'tonext 1s linear';

    });

    backSlider.addEventListener('click',(e) => {
        if ('.slider__item.active') {
            document.querySelector('.slider__item.active').classList.remove('active');
       }
       if ('.slider__scroll-icon--active.active') {
            document.querySelector('.slider__scroll-icon--active.active').classList.remove('active');
       }
        indexCurrent = (indexCurrent - 1 + sliders.length) % sliders.length;
        nodeActives[indexCurrent].classList.add('active');
        sliders[indexCurrent].classList.add('active');
        sliders[indexCurrent].style.animation = 'toback 1s linear';

    });

    for (var i = 0  ; i < projectNodes.length; i++) {
        if (projectNodes[i].className == 'info__project-node node--current') {
            nodeCurrent = i;
            projectLists[nodeCurrent].classList.add('project--current');
        }
    }

    projectNodes.forEach((node, index ) => {
        node.addEventListener('click', () => {
            var projectList = projectLists[index];
            if ('.info__project-list.project--current') {
                document.querySelector('.info__project-list.project--current').classList.remove('project--current');
            }
            if ('.info__project-node.node--current') {
                document.querySelector('.info__project-node.node--current').classList.remove('node--current');
            }
            if (index > nodeCurrent) {
                projectList.style.animation = 'tonext .4s ease-in';
            }else {
                projectList.style.animation = 'toback .4s ease-in';
            }
            projectList.classList.add('project--current');
            node.classList.add('node--current');
            nodeCurrent = index;
        });
    });
    
}
