var windowWidth = window.innerWidth;    // width of window in pixels
var nav = false;                        // default value of navbar presence
var projects = false;                   // default value of projects presence

function updateWindowSize() {
    windowWidth = window.innerWidth;
}
window.addEventListener('resize', updateWindowSize);

function openNav() {
    if (windowWidth > 600) {
        document.getElementById("navbar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("changeButton").style.cssText = "color: #abb2bf; border-left: solid 5px #56b6c2;"
        nav = true;
    } else {
        document.getElementById("navbar").style.display = "block";
        document.getElementById("navbar").style.position = "relative";
        document.getElementById("navbar").style.left = "0px";
        document.getElementById("navbar").style.height = "auto";
        document.getElementById("navbar").style.width = "100%";
        document.getElementById("navbar").style.marginTop = "40px";
        document.getElementById("navbar").style.zIndex = "0";
        document.getElementById("main").style.marginBottom = "150px";
        nav = true;
    }
}

function closeNav() {
    if (windowWidth > 600) {
        document.getElementById("navbar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        hideProjects();
        document.getElementById("changeButton").style.cssText = ""
        nav = false;
    } else {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("main").style.marginBottom = "0";
        hideProjects();
        nav = false;
    }
   
}


function toggleNav() {
    nav ? closeNav() : openNav();
}

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