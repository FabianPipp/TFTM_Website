function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    var scrollTop = window.scrollY;
    var header = document.getElementById("tftm-header");
    var absoluteButtons = document.getElementById("absoluteButtons");
    var borderBG = document.getElementById("borderBG");
    
    borderBG.style.opacity = scrollTop / 500;
    absoluteButtons.style.opacity = scrollTop / 500;
    header.style.opacity = scrollTop / 500;
    
}
  

