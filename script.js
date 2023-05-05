// Menu Bar
let menu_btn = document.getElementsByClassName("bi-three-dots")[0];
let menu_bx = document.getElementById("menu_bx");

menu_btn.addEventListener("click", () => {
  menu_bx.classList.toggle("ul_active");
});

// Scroll Button
// const btnScrollToTop = document.getElementById("btnScrollToTop")
function home() {
    window.location.href = "index.html";
    
}
// btnScrollToTop.addEventListener("click", function () {
//   window.location="index.html";
//   });

