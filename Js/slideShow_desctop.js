var slideIndex = 0;
showPics();

function showPics(){  

  var i = 0;
  var slides = document.getElementsByClassName("slideShow__container__images_desctop");

  for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
  }
  
  slideIndex++; 

  if (slideIndex > slides.length) {
        slideIndex = 1;
  }
   for (i = 0; i < slides.length; i++) {
       slides[slideIndex - 1].style.display = "block";
    }
      setTimeout(showPics, 4000); 

}