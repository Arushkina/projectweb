//звук клик
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll(".sound-b");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});

//видео полный экран расширения
function enterFullScreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    }else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();     // firefox
    }else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();  // safari
    }else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();      // edje
    }
};


//видео
let btn = document.getElementById("full_screen");
btn.addEventListener("click", function(){
    let videoEle = document.querySelector('video');
    enterFullScreen(videoEle);
});

document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
        console.log('Entered fullscreen:', document.fullscreenElement);
    } else {
        console.log('Exited fullscreen.');
    }
});





//top button
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    //показывать или скрывать смотря на позицию 
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    //вверх когда нажали
    function scrollToTop() {
        document.body.scrollTop = 0; //safari
        document.documentElement.scrollTop = 0; // остальные
    }

    scrollToTopBtn.onclick = scrollToTop;
});
