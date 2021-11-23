
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
if(window.scrollY >= 130){
    nav.classList.add('nav__black');
    nav.classList.remove('nav__transparent');
}
else{
    nav.classList.add('nav__transparent');
    nav.classList.remove('nav__black');
}
})

function whenLoad(){
    const nav = document.getElementById('nav');
    nav.classList.add('nav__transparent');
    console.log("Carregou!");
}

function trailer_start()
{
    var display = document.getElementById('bg_video');

    var video = document.getElementById('bg_video');
    // or video = $('.video-selector')[0];
    video.pause();
    video.currentTime = 0;
    video.load();
    display.style.display = "block";
}

function trailer_stop()
{
    var display = document.getElementById('bg_video');
    display.style.display = "none";
}