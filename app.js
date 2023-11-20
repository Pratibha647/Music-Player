let playButton = document.querySelector("#play_button");

let playpauseContainer = document.querySelector(".playpauseContainer");
let song = new Audio("./assets/Lover-Taylor-Swift(PagalWorld).mp3");

playButton.addEventListener('click', () => {
    playpauseContainer.innerHTML = `<img src="./assets/icons8-pause-button-80.png" alt="" id="pause_button">`
    song.play();
});

let pause_button = document.querySelector("#pause_button")

pause_button.addEventListener('click', () => {
    playpauseContainer.innerHTML = `<img src="./assets/icons8-play-button-80.png" alt="" id="play_button">`
})
