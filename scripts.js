


const entrance = document.querySelector('#entrance');

window.onload = () => {
  entrance.style.opacity = '0';
  setTimeout(() => {entrance.style.display = 'none'}, 1000);
}




const email = document.querySelector('#email'),
      address = document.querySelector('#email p'),
      emailBtn = document.querySelector('#email img');

emailBtn.onclick = () => {
  email.classList.toggle('open');
  address.classList.toggle('open');
}