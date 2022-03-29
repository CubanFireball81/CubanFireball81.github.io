const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const certifications = document.querySelector('#certifications')
const MyIntro = document.querySelector('#MyIntro')


const aboutContent = document.querySelector('#about-content')
const projectsContent = document.querySelector('#projects-content')
const certificationsContent = document.querySelector('#certifications-content')
const MyIntroContent = document.querySelector('#MyIntro-content')

// About Me window
about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        // modal: true,
        width: '800px',
        height: '600px',
        x: "center",
        y: "center",
        top: 55,
        right: 20,
        bottom: 20,
        left: 20,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

// My Projects window
projects.addEventListener('click', () => {
    const projectsBox = new WinBox({
        title: 'My Projects',
        width: '1000px',
        height: '600px',
        x: "center",
        y: "center",
        top: 55,
        right: 20,
        bottom: 20,
        left: 20,
        mount: projectsContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

// My Certifications window
certifications.addEventListener('click', () => {
    const certificationsBox = new WinBox({
        title: 'My Certifications',
        width: '650px',
        height: '600px',
        x: "center",
        y: "center",
        top: 55,
        right: 20,
        bottom: 20,
        left: 20,
        mount: certificationsContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

// Contact Me window
MyIntro.addEventListener('click', () => {
    const MyIntroBox = new WinBox({
        title: 'My Intro Video',
        width: '800px',
        height: '600px',
        x: "center",
        y: "center",
        top: 55,
        right: 20,
        bottom: 20,
        left: 20,
        mount: MyIntroContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

// PRELOADER Script

function my_preloader() {
    "use strict";

    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');

    if (!isMobile) {
        setTimeout(function () {
            preloader.addClass('preloaded');
        }, 800);
        setTimeout(function () {
            preloader.remove();
        }, 2000);

    } else {
        preloader.remove();
    }
}


function load_page() {
    "use strict";

    var speed = 500;
    setTimeout(function () { my_preloader(); }, speed);
}

jQuery(document).ready(function () {
    jQuery(window).load('body', function () {
        load_page();
    });
});