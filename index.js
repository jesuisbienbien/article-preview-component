const shareButton = document.getElementById("share-button");
const shareButtonDark = document.getElementById("share-button-dark");
const authorInfo = document.getElementById("author-container");
const socialMedia = document.getElementById("social-media");
const iconShare = document.getElementById("icon-share-img");
const triangle = document.getElementById("triangle-down");
const width = window.innerWidth;


shareButton.addEventListener("click", (e) => {
    console.log(width);
    if(width < 1440) {
        authorInfo.classList.add("hidden");
        socialMedia.classList.remove("hidden");
    } else {
        iconShare.classList.add("filter-white");
        shareButton.classList.remove("bright-theme");
        shareButton.classList.add("dark-theme");
        shareButtonDark.classList.add("hidden");
        socialMedia.classList.remove("hidden");
        triangle.classList.remove("hidden");
    }
    
})