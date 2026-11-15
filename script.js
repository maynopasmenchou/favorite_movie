
const movieModal = document.getElementById("movieModal");
const movieFrame = document.getElementById("movieFrame");

const openMovie = document.getElementById("openMovie");
const backHome = document.getElementById("backHome");


// YOUTUBE VIDEO

const youtubeEmbed =
    "https://www.youtube.com/embed/lKAzNiM5lsM?autoplay=1";

// OPEN MOVIE PLAYER
openMovie.addEventListener("click", function() {

    movieFrame.src = youtubeEmbed;

    movieModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


// BACK TO HOME
function returnHome() {

    // Stop video
    movieFrame.src = "";

    // Close player
    movieModal.classList.remove("active");

    // Restore scrolling
    document.body.style.overflow = "auto";

    // Return to home section
    window.location.hash = "home";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// BACK BUTTON
backHome.addEventListener("click", returnHome);


// CLOSE PLAYER WHEN CLICKING OUTSIDE
movieModal.addEventListener("click", function(event) {

    if (event.target === movieModal) {
        returnHome();
    }

});


// ESCAPE KEY
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        returnHome();
    }

});
