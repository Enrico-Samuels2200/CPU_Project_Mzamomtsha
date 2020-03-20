var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
// variable named i
  var i;
  // getting slides from the div class name 
  var slides = document.getElementsByClassName("mySlides");
  // the dot that show what slide we are on
  var dots = document.getElementsByClassName("dot");
  // No matter how much slides there are its should go on till the last slide
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  	// dont display any styles
      slides[i].style.display = "none";  
  }
  // go on to the last slide
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}