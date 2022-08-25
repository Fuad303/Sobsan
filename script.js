// Search Function
function searchFunction(){
    let x = document.getElementById('search')

    if (x.style.display === 'none'){
        x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
}   

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


