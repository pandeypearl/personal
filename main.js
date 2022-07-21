
/** SCROLL TOP **/
var topbutton = document.getElementById("topButton");

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/** PAGE NAVIGATION **/
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  links.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


/*** ANIMATIONS **/
const profile = document.querySelector(".profile");
const intro = document.querySelector(".landing-text");
const navigation = document.querySelector(".navigation");
const social = document.querySelector(".social-media");

const tl = new TimelineMax();

tl.fromTo(intro,2, {x: "-100%", opacity: "0"}, {x: "0%", opacity: "1", ease: Power2.easeInOut })
.fromTo(profile,2, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1")
.fromTo(social, 1.5, {y: "-400%"}, {y: "0%", ease: Power2.easeInOut}, "-=1.5")
.fromTo(navigation, 1.5, {y: "-400%"}, {y: "0%", ease: Power2.easeInOut}, "-=1");




















