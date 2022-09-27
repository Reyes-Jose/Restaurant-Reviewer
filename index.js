// // For the index.html

// For sign up button
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('#signup-background');
const modal = document.querySelector('#modal1');

signupButton.addEventListener('click', () => {
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
})


//For the profile button
const profileButton = document.querySelector('#profile');
const modalBG = document.querySelector('#profile-Bg');
const modal22 = document.querySelector("#modal2");

profileButton.addEventListener('click', () => {
  modal22.classList.add('is-active');
})

modalBG.addEventListener('click', () => {
  modal22.classList.remove('is-active')
})



// For review button
const button1 = document.getElementById('button1');
const modal1 = document.getElementById('page-modal');
const close = document.getElementsByClassName('modal-close')[0]


button1.onclick = function() {
    modal1.style.display = 'block';
}

close.onclick = function() {
    modal1.style.display = "none";
}
