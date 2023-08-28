const toggle = document.querySelector(".toggle");
const iconToggle = document.querySelector(".toggle i");
const contentToggle = document.querySelector(".content-toggle");
console.log(toggle);
console.log(iconToggle);

toggle.addEventListener("click", () => {
	contentToggle.classList.toggle("open");

	if (iconToggle.className == "bi bi-grid-fill") {
		iconToggle.className = "bi bi-grid";
		iconToggle.style.transition = "all 300ms ease-in-out";
		iconToggle.style.color = "#fff";
	} else if (iconToggle.className == "bi bi-grid") {
		iconToggle.className = "bi bi-grid-fill";
		iconToggle.style.transition = "all 300ms ease-in-out";
		iconToggle.style.color = "#149f3b";
	}
});

// active nav
const home = document.querySelectorAll("#link-home");
const about = document.querySelectorAll("#link-about");
const edu = document.querySelectorAll("#link-edu");
const portfolio = document.querySelectorAll("#link-portfolio");

console.log("hasilnya");

console.log(home);
console.log(about);
console.log(edu);
console.log(portfolio);

home[0].addEventListener("click", () => {
	home[0].classList.add("active");
	about[0].classList.remove("active");
	edu[0].classList.remove("active");
	portfolio[0].classList.remove("active");
});

about[0].addEventListener("click", () => {
	about[0].classList.add("active");
	home[0].classList.remove("active");
	edu[0].classList.remove("active");
	portfolio[0].classList.remove("active");
});

edu[0].addEventListener("click", () => {
	edu[0].classList.add("active");
	about[0].classList.remove("active");
	home[0].classList.remove("active");
	portfolio[0].classList.remove("active");
});

portfolio[0].addEventListener("click", () => {
	portfolio[0].classList.add("active");
	about[0].classList.remove("active");
	edu[0].classList.remove("active");
	home[0].classList.remove("active");
});
