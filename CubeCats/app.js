let x = 0, bool = false, interval;

const rotate = () => {
const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

const changePlayButton = () => {
    const i = document.querySelector('.play-arrow i');
    const cls = i.classList[1];
    if(cls === 'fa-play') {
        i.classList.remove('fa-play');
        i.classList.add('fa-stop');
    } else {
        i.classList.remove('fa-stop');
        i.classList.add('fa-play');
    }
    console.log(cls);
}

const playButton = () => {
    if(!bool) {
        interval = setInterval(() => {
            x -=90;
            rotate();
        }, 1000);
        changePlayButton();
        bool = true;
    } else {
        clearInterval(interval);
        changePlayButton();
        bool = false;
    }

}

document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90;
    rotate();
    if(bool) {
        playButton(); 
    }
});

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    x += 25;
    rotate();
});

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    x -=90;
    rotate();
    if(bool) {
        playButton(); 
    }
});

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    x += 25;
    rotate();
});

document.querySelector('.play-arrow').addEventListener('click', () => {
    playButton();
});

