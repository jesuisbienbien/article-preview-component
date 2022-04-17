const shareButton = document.getElementById("share-button");
const shareButtonDark = document.getElementById("share-button-dark");
const authorInfo = document.getElementById("author-container");
const shareSection = document.getElementById("share-section");
const iconShare = document.getElementById("icon-share-img");
const triangle = document.getElementById("triangle-down");
const width = window.innerWidth;

function hide(element) {
    element.classList.add("hidden");
}
function show(element) {
    element.classList.remove("hidden");
}

function reset(width){
    //if width < 1440px, show author
    //else if width >= 1440px return share button to bright theme 
    if(width < 1440) {
        show(authorInfo);
    } else{
        shareButton.classList.remove("dark-theme");
        shareButton.classList.add("bright-theme");
        iconShare.classList.remove("filter-white");
        hide(triangle);
    }
    //hide share section
    hide(shareSection);

    
}

function showShareSection(width) {
    //hide author if width <1440px
    //hide shareButton (Dark) if width >= 1440px and change the shareButton to dark theme


    if(width < 1440){
        hide(authorInfo);
    }else {
        iconShare.classList.add("filter-white");
        shareButton.classList.remove("bright-theme");
        shareButton.classList.add("dark-theme");
        hide(shareButtonDark);
        show(triangle);
    }


    //remove hidden class on share section  
    show(shareSection);
}

/* if shareButton (original) is clicked */
shareButton.addEventListener("click", (e) => {
   //check if the share section hidden or not
   if(shareSection.classList.contains("hidden")) {
       showShareSection(width);
   }else {
       reset(width);
   }
    
})

/* if shareButtonDark is clicked (on mobile) */
shareButtonDark.addEventListener("click", (e) => {
    reset(width);
})