function openMenu() { 
    let screenWidth = window.innerWidth; 
    if (screenWidth <= 480) { 
        document.getElementById("sideMenu").style.width = "100%"; 
        document.getElementById("mainContent").style.marginLeft = "100%"; 
    } else { 
        document.getElementById("sideMenu").style.width = "250px"; 
        document.getElementById("mainContent").style.marginLeft = "250px"; 
    } 
} 

function closeMenu() { 
    document.getElementById("sideMenu").style.width = "0"; 
    document.getElementById("mainContent").style.marginLeft= "0"; 
} 

window.onresize = function() { 
    let screenWidth = window.innerWidth; 
    if (screenWidth > 480) { 
        document.getElementById("sideMenu").style.width = "0"; 
        document.getElementById("mainContent").style.marginLeft = "0"; 
    }
}

window.onscroll = function() {scrollProgress()};

function scrollProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.scroll-animation');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('show');
        } else {
            reveals[i].classList.remove('show');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    closeMenu();
});
