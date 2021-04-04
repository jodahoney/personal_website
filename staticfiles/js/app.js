var nav = false;

function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("changeButton").style.cssText = "color: #abb2bf; border-left: solid 5px #56b6c2;"
    nav = true;
}
  
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    hideProjects();
    document.getElementById("changeButton").style.cssText = ""
    nav = false;
}

function toggleNav() {
    nav ? closeNav() : openNav();
}


var projects = false;

function showProjects() {
    document.getElementById("projects-list").style.display = "inline";
    document.getElementById("arrow-change").innerHTML = 'v';
    document.getElementById("project-folder-icon").src = "/static/images/folder-open-solid.svg"
    projects = true;
}

function hideProjects() {
    document.getElementById("projects-list").style.display = "none";
    document.getElementById("arrow-change").innerHTML = '>';
    document.getElementById("project-folder-icon").src = "/static/images/folder-solid.svg"
    projects = false;
}

function toggleProjects() {
    projects ? hideProjects() : showProjects();
}