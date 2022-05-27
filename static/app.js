const btnCart = document.querySelector('#cart-logo')
const navContent = document.querySelector('#side-content')
const btnBack = document.querySelector('#back')

navContent.style.display = 'none'

btnCart.addEventListener('click',openSideNav)
btnBack.addEventListener('click',closeSideNav)

function openSideNav(){
    navContent.style.display = 'block'
    btnCart.style.display = "none"
}
function closeSideNav(){
    navContent.style.display = 'none'
    btnCart.style.display = "block"
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
