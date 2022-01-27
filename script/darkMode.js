const darkMode = document.getElementById("darkMode");
const darkMode_bg = document.getElementById("darkMode-background");
const body = document.querySelector("body");
const currentTheme=localStorage.getItem("theme")
console.log(currentTheme)


if(currentTheme=="dark"){
darkMode_bg.classList.toggle("active")
body.classList.toggle("dark")
}



darkMode.addEventListener("click", () => {
  darkMode_bg.classList.toggle("active");
  body.classList.toggle("dark");

  if (body.classList.length==1) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "white");
  }

});


