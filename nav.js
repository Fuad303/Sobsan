// Nav Function
const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = () =>
{
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style='visibility: visible, height: 100vh; width: 100vw; overflow: hidden;';
  }
const navClose = () =>
{
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style='visibility: hidden, height: initial; width: 100%; overflow-x: hidden;';
}
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose); 
navBgOverlayEl.addEventListener('click', navClose); 


// Search Function
function searchFunction(){
  let x = document.getElementById('search')

  if (x.style.display === 'block'){
      x.style.display = 'none';
  }
  else{
      x.style.display = 'block';
  }
}   


/* Increment and decrement functions */
function increment() {
  document.getElementById('demoInput').stepUp();
}
function decrement() {
  document.getElementById('demoInput').stepDown();
} 
/* End of Increment and decrement functions */


  // All item remove function
  function  removeFunction() {
    const element = document.getElementById("cart");
    element.remove();
  }
// End of All item remove function


// Top Function  
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
// End of Top Function

// Language 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}