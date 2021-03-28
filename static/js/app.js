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


var projects = false;

function showProjects() {
    document.getElementById("projects-list").style.display = "inline";
    projects = true;
}

function hideProjects() {
    document.getElementById("projects-list").style.display = "none";
    projects = false;
}

function toggleProjects() {
    projects ? hideProjects() : showProjects();
}