<<<<<<< HEAD
function nextPage() {
    document.getElementById("welcomePage").style.transform = "translateX(-1000px)";
    document.getElementsByClassName("nav1")[0].style.backgroundColor = "white";
    document.getElementsByClassName("nav1")[0].style.transform = "scale(1)";
    document.getElementsByClassName("nav2")[0].style.backgroundColor = "#ffc107";
    document.getElementsByClassName("nav2")[0].style.transform = "scale(1.3)";
    document.getElementById("whatsPage").style.display = "flex";
    setTimeout(function () {
        document.getElementById("welcomePage").style.display = "none";
    }, 230);
    setTimeout(function () {
        document.getElementById("next").style.transform = "translateX(0)";
    }, 2000);
}
function nextPage1() {
    setTimeout(function () {
        document.getElementById("next").style.transform = "translateX(100%)";
        document.getElementsByClassName("nav2")[0].style.backgroundColor = "white";
        document.getElementsByClassName("nav2")[0].style.transform = "scale(1)";
        document.getElementsByClassName("nav3")[0].style.backgroundColor = "#ffc107";
        document.getElementsByClassName("nav3")[0].style.transform = "scale(1.3)";
        document.getElementById("whatsPage").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("whatsPage").style.display = "none";
            document.getElementById("startPage").style.display = "flex";
            setTimeout(function () {
                document.getElementById("next1").style.transform = "translateX(0)";
            }, 4000);
        }, 1000);
    }, 300);
} 
function anotherPage() {
    window.location.href = "./index.html";
=======
function nextPage() {
    document.getElementById("welcomePage").style.transform = "translateX(-1000px)";
    document.getElementsByClassName("nav1")[0].style.backgroundColor = "white";
    document.getElementsByClassName("nav1")[0].style.transform = "scale(1)";
    document.getElementsByClassName("nav2")[0].style.backgroundColor = "#ffc107";
    document.getElementsByClassName("nav2")[0].style.transform = "scale(1.3)";
    document.getElementById("whatsPage").style.display = "flex";
    setTimeout(function () {
        document.getElementById("welcomePage").style.display = "none";
    }, 230);
    setTimeout(function () {
        document.getElementById("next").style.transform = "translateX(0)";
    }, 2000);
}
function nextPage1() {
    setTimeout(function () {
        document.getElementById("next").style.transform = "translateX(100%)";
        document.getElementsByClassName("nav2")[0].style.backgroundColor = "white";
        document.getElementsByClassName("nav2")[0].style.transform = "scale(1)";
        document.getElementsByClassName("nav3")[0].style.backgroundColor = "#ffc107";
        document.getElementsByClassName("nav3")[0].style.transform = "scale(1.3)";
        document.getElementById("whatsPage").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("whatsPage").style.display = "none";
            document.getElementById("startPage").style.display = "flex";
            setTimeout(function () {
                document.getElementById("next1").style.transform = "translateX(0)";
            }, 4000);
        }, 1000);
    }, 300);
} 
function anotherPage() {
    window.location.href = "./index.html";
>>>>>>> 7d1af794462979fe3c19f53797fa84535e16440a
}