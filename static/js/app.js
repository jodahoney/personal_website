document.addEventListener("DOMContentLoaded", ()=> {
    //closeNav();
})

var nav = false;

function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    nav = true;
}
  
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    nav = false;
}

function toggleNav() {
    nav ? closeNav() : openNav();
}

// function navChanger() {
//     var nav = document.getElementById("navbar");
//     if (nav.style.display === "none"){
//         nav.style.display = "block";
//     } else {
//         nav.style.display = "none";
//     }
// }

// const elementClicked = document.getElementById("changeButton");
// const elementYouWantToShow = document.getElementById("navbar");

// elementClicked.addEventListener("click", ()=>{
//   elementYouWantToShow.classList.toggle("hide");
// });