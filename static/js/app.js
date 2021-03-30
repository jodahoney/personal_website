var nav = false;

function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    nav = true;
}
  
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    hideProjects();
    nav = false;
}

function toggleNav() {
    nav ? closeNav() : openNav();
}


var projects = false;

function showProjects() {
    document.getElementById("projects-list").style.display = "inline";
    document.getElementById("arrow-change").innerHTML = 'v';
    projects = true;
}

function hideProjects() {
    document.getElementById("projects-list").style.display = "none";
    document.getElementById("arrow-change").innerHTML = '>';
    projects = false;
}

function toggleProjects() {
    projects ? hideProjects() : showProjects();
}