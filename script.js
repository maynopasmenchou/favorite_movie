const movieModal = document.getElementById("movieModal");
const movieFrame = document.getElementById("movieFrame");
const openMovie = document.getElementById("openMovie");
const backHome = document.getElementById("backHome");

const movieChoices = document.querySelectorAll(".movie-choice");

const movies = {
    coco: {
        category: "DISNEY • PIXAR",
        title: "COCO",
        tagline: "Remember Me.",
        description: "A heartwarming story about family, memories, dreams, and music.",
        poster: "https://image.tmdb.org/t/p/w780/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
        video: "https://www.youtube.com/embed/lKAzNiM5lsM?autoplay=1",
        aboutImage: "https://image.tmdb.org/t/p/w780/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        aboutHeading: "A Journey Beyond Life",

        about: [
            "Coco is a 2017 animated film produced by Pixar Animation Studios.",
            "Miguel dreams of becoming a musician despite his family's ban on music. His adventure in the Land of the Dead helps him discover his family's history.",
            "The movie shows the importance of family, music, memories, and traditions."
        ],

        lessonsIntro: "Coco taught me valuable lessons that I can apply in my everyday life.",

        lessons: [
            ["♡", "Family Comes First", "Family is important because they are the people who love and support us."],
            ["♫", "Never Give Up", "We should continue following our dreams even when challenges come our way."],
            ["✿", "Remember Your Loved Ones", "Memories help us remember the people who made a difference in our lives."]
        ],

        reflectionTitle: "How Coco Affected My Life",

        reflection: [
            "Coco teaches me the importance of family, love, and following my dreams.",
            "Miguel inspired me to follow my dreams and appreciate my family.",
            "This movie reminds me that family and the memories we share will always be important."
        ],

        quote: '"Remember me, even when I\'m far away."',
        footer: "A story of family, music, dreams, and memories."
    },

    // PART 2 CONTINUES HERE
    lionking: {
        category: "DISNEY",
        title: "THE LION KING",
        tagline: "Remember Who You Are.",
        description: "Simba's journey teaches courage, responsibility, and family.",
        poster: "images/Lionking1.jpg",
        video: "https://www.youtube.com/embed/1CD0YjYANSk?autoplay=1",
        aboutImage: "images/Lionking2.jpg",
        aboutHeading: "The Circle of Life",

        about: [
            "The Lion King is a Disney story about Simba, a young lion destined to become king.",
            "After losing his father, Simba leaves home but eventually finds the courage to face his past.",
            "The movie teaches courage, responsibility, family, and friendship."
        ],

        lessonsIntro: "The Lion King taught me important lessons about life.",

        lessons: [
            ["🦁", "Be Courageous", "Face your fears and challenges."],
            ["★", "Accept Responsibility", "Take responsibility for your actions."],
            ["♡", "Remember Your Roots", "Our family and experiences shape who we are."]
        ],

        reflectionTitle: "How The Lion King Affected My Life",

        reflection: [
            "Simba's journey shows me that I should have courage when facing challenges.",
            "I learned that running away from problems does not solve them.",
            "This movie reminds me to be brave, value my family, and believe in myself."
        ],

        quote: '"Remember who you are."',
        footer: "A story of courage, family, and responsibility."
    },

    wildrobot: {
        category: "DREAMWORKS ANIMATION",
        title: "THE WILD ROBOT",
        tagline: "A Journey of Love and Belonging.",
        description: "Roz discovers friendship, love, and family on a wild island.",
        poster: "images/wildrobot1.jpg",
        video: "https://www.youtube.com/embed/akAI59gcsIw?autoplay=1",
        aboutImage: "images/wildrobot2.jpg",
        aboutHeading: "Learning to Belong",

        about: [
            "The Wild Robot is about a robot named Roz stranded on an island.",
            "Roz forms a bond with an orphaned gosling named Brightbill and learns about love and motherhood.",
            "The movie highlights kindness, acceptance, love, and sacrifice."
        ],

        lessonsIntro: "The Wild Robot taught me lessons about kindness and love.",

        lessons: [
            ["♡", "Show Kindness", "Small acts of kindness can make a big difference."],
            ["✿", "Accept Differences", "Respect others even when they are different."],
            ["★", "Love Through Actions", "Love is shown through care and sacrifice."]
        ],

        reflectionTitle: "How The Wild Robot Affected My Life",

        reflection: [
            "The movie showed me that love and kindness can connect different individuals.",
            "Roz taught me that family is also about caring and supporting one another.",
            "It inspired me to become more understanding and compassionate."
        ],

        quote: '"Sometimes to survive, we must become more than what we were made to be."',
        footer: "A story of kindness, love, and belonging."
    },

    // PART 3 CONTINUES HERE
    wonder: {
        category: "LIONSGATE",
        title: "WONDER",
        tagline: "Choose Kind.",
        description: "Wonder teaches kindness, acceptance, and empathy.",
        poster: "images/wonder1.jpg",
        video: "https://www.youtube.com/embed/jXy0eEcNE6U?autoplay=1",
        aboutImage: "images/wonder2.jpg",
        aboutHeading: "A Story About Kindness",

        about: [
            "Wonder is a 2017 film about August Pullman, a boy born with a facial difference.",
            "Auggie starts attending school and learns to make friends despite the challenges he faces.",
            "The movie teaches kindness, empathy, acceptance, and friendship."
        ],

        lessonsIntro: "Wonder taught me lessons about kindness and acceptance.",

        lessons: [
            ["♡", "Choose Kindness", "Always choose to be kind to others."],
            ["✿", "Accept Everyone", "Everyone deserves respect and acceptance."],
            ["★", "Look Beyond Appearance", "A person's beauty comes from their character."]
        ],

        reflectionTitle: "How Wonder Affected My Life",

        reflection: [
            "Wonder taught me to treat everyone with kindness and respect.",
            "Auggie's experiences showed me that small acts of kindness can make someone feel accepted.",
            "This movie inspires me to be more understanding, patient, and kind."
        ],

        quote: '"When given the choice between being right or being kind, choose kind."',
        footer: "A story of kindness, courage, and acceptance."
    }
};
// DISPLAY SELECTED MOVIE
function showMovie(movieKey) {
    const movie = movies[movieKey];

    if (!movie) return;

    // CHANGE SECTION TITLE BASED ON SELECTED MOVIE
    document.getElementById("aboutTitle").textContent =
    "ABOUT " + movie.title;
    document.getElementById("lessonsTitle").textContent =
    "LIFE LESSONS FROM " + movie.title;
    document.getElementById("reflectionTitle").textContent =
    "HOW " +movie.title + " AFFECTED MY LIFE";

    document.getElementById("movieCategory").textContent = movie.category;
    document.getElementById("movieTitle").textContent = movie.title;
    document.getElementById("movieTagline").textContent = movie.tagline;
    document.getElementById("movieDescription").textContent = movie.description;
    document.getElementById("moviePoster").src = movie.poster;

    document.getElementById("aboutImage").src = movie.aboutImage;

    const aboutPic = document.getElementById("aboutImage");

    if (aboutPic) {
        aboutPic.src = movie.aboutImage;
        aboutPic.alt = movie.title + " movie scene";
    }
    document.getElementById("aboutHeading").textContent = movie.aboutHeading;

    movie.about.forEach((text, i) => {
        document.getElementById("aboutParagraph" + (i + 1)).textContent = text;
    });

    document.getElementById("lessonsIntro").textContent = movie.lessonsIntro;

    movie.lessons.forEach((lesson, i) => {
        document.querySelectorAll(".lesson-icon")[i].textContent = lesson[0];
        document.getElementById("lessonTitle" + (i + 1)).textContent = lesson[1];
        document.getElementById("lessonText" + (i + 1)).textContent = lesson[2];
    });

    movie.reflection.forEach((text, i) => {
        document.getElementById("reflectionParagraph" + (i + 1)).textContent = text;
    });

    document.getElementById("reflectionQuote").textContent = movie.quote;
    document.getElementById("footerDescription").textContent = movie.footer;
}
// MOVIE SELECTION BUTTONS
movieChoices.forEach(button => {
    button.addEventListener("click", () => {
        showMovie(button.dataset.movie);
    });
});
// OPEN MOVIE
openMovie.addEventListener("click", () => {
    const title = document.getElementById("movieTitle").textContent;
    const movieKey = Object.keys(movies).find(
        key => movies[key].title === title
    );

    if (movieKey) {
        movieFrame.src = movies[movieKey].video;
        movieModal.classList.add("active");
    }
});
// CLOSE MOVIE
backHome.addEventListener("click", () => {
    movieModal.classList.remove("active");
    movieFrame.src = "";
});
// SHOW COCO BY DEFAULT
showMovie("coco");