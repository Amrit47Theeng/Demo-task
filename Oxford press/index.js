const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html") {
    document.querySelector(".home").classList.add("activeLink")
}
if(pageName === "about.html") {
    document.querySelector(".about").classList.add("activeLink")
}
if(pageName === "program.html") {
    document.querySelector(".programs").classList.add("activeLink")
}
if(pageName === "scholarships.html") {
    document.querySelector(".scholarships").classList.add("activeLink")
}
if(pageName === "journal.html") {
    document.querySelector(".journal").classList.add("activeLink")
}
if(pageName === "contact.html") {
    document.querySelector(".contact").classList.add("activeLink")
}