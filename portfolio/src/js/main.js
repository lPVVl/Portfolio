'use strict'

const navigation = document.querySelectorAll('.nav__links a'),
    btn = document.querySelectorAll('.primary__btn');


function scrollAnimation(object) {
    object.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').slice(1);
            document.getElementById(sectionId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

scrollAnimation(navigation);
scrollAnimation(btn);

// Анимации при прокрутке

const animatedElements = document.querySelectorAll('.fade-in-up');

function checkVisibility() {
    const scrollTriggerPoint = window.scrollY + window.innerHeight - 100;

    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        if (elementTop < scrollTriggerPoint && !element.classList.contains('is-visible')) {
            element.classList.add('is-visible');
        } else if (elementTop > scrollTriggerPoint && element.classList.contains('is-visible')) {
            element.classList.remove('is-visible');
        }
    });
}
checkVisibility();
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Активные ссылки навигации 

const sections = document.querySelectorAll('#hero, #about, #skills, #projects, #contact');

function activeLink() {

    navigation.forEach(link => {
        link.classList.remove('active')
    })

    let currentScroll = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            const correspondingLink = document.querySelector(`.nav__links a[href="#${section.id}"]`);

            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

activeLink();
window.addEventListener('scroll', activeLink);

