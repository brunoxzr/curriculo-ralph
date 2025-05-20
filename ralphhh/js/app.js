const themeSwitch = document.getElementById("theme-switch");

if (themeSwitch) {
  themeSwitch.addEventListener("change", () => {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}
