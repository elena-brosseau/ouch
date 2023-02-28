

/*
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
*/


const contact = document.querySelector('#contact'),
      email = document.querySelector('#contact p')
      copy = document.querySelector('#contact img');

contact.addEventListener('click', openContact)

function openContact() {
  contact.style.maxWidth = '260px';
  email.innerHTML = 'sophie@ouchproductions.tv';
  copy.style.display = 'block';
  contact.removeEventListener('click', openContact);
}

function closeContact() {
  contact.style.maxWidth = '160px';
  email.innerHTML = 'let\'s work together';
  copy.style.display = 'none';
  contact.addEventListener('click', openContact);
}

copy.onclick = () => {
  navigator.clipboard.writeText(email.innerHTML);
  closeContact();
}
