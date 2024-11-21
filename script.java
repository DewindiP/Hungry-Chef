const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnloginLink = document.querySelector('.btnlogin-popup');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
}); 

btnloginLink .addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
}); 


function toggleImageSlider() {
    var imageSliderContainer = document.getElementById("imageSliderContainer");
    

    if (imageSliderContainer.classList.contains("hidden")) {
        imageSliderContainer.classList.remove("hidden");
    } else {
        imageSliderContainer.classList.add("hidden");
    }
}

document.querySelector(".btnlogin-popup").addEventListener("click", function() {
    toggleImageSlider();
});
