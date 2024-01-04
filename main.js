const pictures = document.querySelectorAll('.picture');
const circles = document.querySelectorAll('.circle');
let slideShow;

function getCurrentPictureNumber() {
    for (let i = 1; i <= 3; i++) {
        let picture = document.getElementById('picture' + i);
        let leftString = getComputedStyle(picture).getPropertyValue('left');
        if (leftString === '0px') {
            return i
        }
    }
}

function displayPicture(newNumber) {
    if (newNumber < 1 || newNumber > 3) return
    const distance = newNumber - getCurrentPictureNumber();
    for (let i = 1; i <=3; i++) {
        let picture = document.getElementById('picture' + i);
        let leftString = getComputedStyle(picture).getPropertyValue('left');
        let leftNum = Number(leftString.slice(0, leftString.length - 2));
        picture.style.left = leftNum - distance * 1000 + "px";
    }
    document.getElementById("circle" + newNumber).checked = true;
}

function moveLeft() {
    const currentPictureNumber = getCurrentPictureNumber();
    if (currentPictureNumber > 1 ) {
        displayPicture(currentPictureNumber - 1); 
    } else {
        displayPicture(3)
    }
}

function moveRight() {
    const currentPictureNumber = getCurrentPictureNumber();
    if (currentPictureNumber < 4 ) {
        displayPicture(currentPictureNumber + 1);
    } else {
        displayPicture(1);
    }
}

function startSlideShow() {
    slideShow = setInterval(() => {
        moveRight();
    }, 2000);
}

function stopSlideShow() {
    clearInterval(slideShow)
}

document.querySelector('#leftArrow').addEventListener("click", () => {
    moveLeft();
});

document.querySelector('#rightArrow').addEventListener("click", () => {
    moveRight();
})

document.querySelector('#circle1').addEventListener("click", () => {
    displayPicture(1);
})

document.querySelector('#circle2').addEventListener("click", () => {
    displayPicture(2);
})

document.querySelector('#circle3').addEventListener("click", () => {
    displayPicture(3);
})

document.querySelector('#play').addEventListener("click", () => {
    startSlideShow();
})

document.querySelector('#stop').addEventListener("click", () => {
    stopSlideShow();
})

startSlideShow();