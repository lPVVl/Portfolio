'use strict'

const navigation = document.querySelectorAll('.nav-links a');

navigation.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
})