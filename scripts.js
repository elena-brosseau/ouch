
const anaVid = document.querySelector('#ANA-vid');

anaVid.onclick = () => {
    clearInterval(anaLoop);
    anaVid.muted = false;
    anaVid.currentTime = 0;
    anaVid.controls = true;
}




function startPreview(video) {
    video.muted = true;
    video.currentTime = 132;
    video.play();
  }
  
startPreview(anaVid)
let anaLoop = setInterval(() => {startPreview(anaVid)}, 5900)