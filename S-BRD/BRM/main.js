<<<<<<< HEAD
var map = new ol.Map({
    target: "map",
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([112.1619, -8.0988]),
        zoom: 13,
    }),
});

const bodyHeight = document.body.clientHeight;
const bodyWidth = document.body.clientWidth;
const width1 = bodyWidth / 2.15;
const width2 = bodyWidth / 1.65;
console.log(bodyHeight);
console.log(width1);
document.getElementById("bg").style.height = `${bodyHeight}px`;
document.querySelector('#bg > div:nth-child(2)').style.width = `${width1}px`;
document.querySelector('#bg > div:nth-child(2)').style.height = `${width1}px`;

document.querySelector('#bg > div:nth-child(5)').style.width = `${width2}px`;
document.querySelector('#bg > div:nth-child(5)').style.height = `${width2}px`;


const elements = document.querySelectorAll('body *');
const menu = document.querySelectorAll('#burger > span');
elements.forEach(element => {
    element.style.color = '#FFFFFF';
});
menu.forEach(menu => {
    menu.style.backgroundColor = '#FFFFFF';
});
document.getElementsByClassName("blitar-logo")[0].style.display = "none";
document.getElementsByClassName("blank-sq-1")[0].style.display = "none";
document.getElementsByClassName("blitar-logo1")[0].style.display = "block";
document.getElementsByClassName("blank-sq-2")[0].style.display = "block";
document.getElementById("submit-button").style.backgroundColor = "#FF3636";
document.getElementById("submit-button").style.border = "1px white solid";
document.getElementsByClassName("keterangan")[0].style.backgroundColor = "#FF3636";
document.getElementsByClassName("card")[0].style.backgroundColor = "#FF3636";



function change() {

    document.getElementsByClassName("blitar-logo")[0].style.display = "none";
    document.getElementsByClassName("blank-sq-1")[0].style.display = "none";
    document.getElementsByClassName("blitar-logo1")[0].style.display = "block";
    document.getElementsByClassName("blank-sq-2")[0].style.display = "block";
    // Mengubah warna elemen-elemen tersebut
    elements.forEach(element => {
        element.style.color = '#FFFFFF';
    });
    menu.forEach(menu => {
        menu.style.backgroundColor = '#FFFFFF';
    })
    document.getElementsByClassName("alas")[0].style.backgroundColor = "#FF3636"
    // document.getElementById("bg").style.display = "none";
    document.getElementsByClassName("change")[0].setAttribute("onclick", "change1()");
    document.getElementById("submit-button").style.backgroundColor = "#FF3636";
    document.getElementById("submit-button").style.border = "1px white solid";
    document.getElementsByClassName("keterangan")[0].style.backgroundColor = "#FF3636";
    document.getElementsByClassName("card")[0].style.backgroundColor = "#FF3636";
    document.getElementById("tambalBan").style.backgroundColor = "#FF3636" ;
}

function change1() {
    document.getElementsByClassName("blitar-logo1")[0].style.display = "none";
    document.getElementsByClassName("blank-sq-2")[0].style.display = "none";
    document.getElementsByClassName("blitar-logo")[0].style.display = "block";
    document.getElementsByClassName("blank-sq-1")[0].style.display = "block";
    // Mengubah warna elemen-elemen tersebut
    elements.forEach(element => {
        element.style.color = '#1F1F30'; // ganti warna teks menjadi merah
    });
    menu.forEach(menu => {
        menu.style.backgroundColor = '#1F1F30';
    });
    document.getElementsByClassName("alas")[0].style.backgroundColor = "transparent";
    // document.getElementById("bg").style.display = "block";
    document.getElementById("submit-button").style.backgroundColor = "#FFFFFF";
    document.getElementById("submit-button").style.border = "1px white solid";
    document.getElementsByClassName("keterangan")[0].style.backgroundColor = "#FFFFFF";
    document.getElementsByClassName("card")[0].style.backgroundColor = "#FFFFFF";
    document.getElementById("tambalBan").style.backgroundColor = "#FFFFFF" ;
    document.getElementsByClassName("change")[0].setAttribute("onclick", "change()");
}

function burger() {
    document.querySelector('#burger > span:nth-child(1)').style.transform = "translateY(180%)";
    document.querySelector('#burger > span:nth-child(3)').style.transform = "translateY(-180%)";
    document.getElementsByClassName("nav-content-2")[0].style.transform = "translateX(0)";




    document.getElementById("burger").setAttribute("onclick", "back()");
}

function back() {
    document.querySelector('#burger > span:nth-child(1)').style.transform = "translateY(0)";
    document.querySelector('#burger > span:nth-child(3)').style.transform = "translateY(0)";
    document.getElementsByClassName("nav-content-2")[0].style.transform = "translateX(-100%)";


    document.getElementById("burger").setAttribute("onclick", "burger()");
}


=======
var map = new ol.Map({
    target: "map",
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([112.1619, -8.0988]),
        zoom: 13,
    }),
});

const bodyHeight = document.body.clientHeight;
const bodyWidth = document.body.clientWidth;
const width1 = bodyWidth / 2.15;
const width2 = bodyWidth / 1.65;
console.log(bodyHeight);
console.log(width1);
document.getElementById("bg").style.height = `${bodyHeight}px`;
document.querySelector('#bg > div:nth-child(2)').style.width = `${width1}px`;
document.querySelector('#bg > div:nth-child(2)').style.height = `${width1}px`;

document.querySelector('#bg > div:nth-child(5)').style.width = `${width2}px`;
document.querySelector('#bg > div:nth-child(5)').style.height = `${width2}px`;


const elements = document.querySelectorAll('body *');
const menu = document.querySelectorAll('#burger > span');
elements.forEach(element => {
    element.style.color = '#FFFFFF';
});
menu.forEach(menu => {
    menu.style.backgroundColor = '#FFFFFF';
});
document.getElementsByClassName("blitar-logo")[0].style.display = "none";
document.getElementsByClassName("blank-sq-1")[0].style.display = "none";
document.getElementsByClassName("blitar-logo1")[0].style.display = "block";
document.getElementsByClassName("blank-sq-2")[0].style.display = "block";
document.getElementById("submit-button").style.backgroundColor = "#FF3636";
document.getElementById("submit-button").style.border = "1px white solid";

function change() {

    document.getElementsByClassName("blitar-logo")[0].style.display = "none";
    document.getElementsByClassName("blank-sq-1")[0].style.display = "none";
    document.getElementsByClassName("blitar-logo1")[0].style.display = "block";
    document.getElementsByClassName("blank-sq-2")[0].style.display = "block";
    // Mengubah warna elemen-elemen tersebut
    elements.forEach(element => {
        element.style.color = '#FFFFFF';
    });
    menu.forEach(menu => {
        menu.style.backgroundColor = '#FFFFFF';
    })
    document.getElementsByClassName("alas")[0].style.backgroundColor = "#FF3636"
    // document.getElementById("bg").style.display = "none";
    document.getElementsByClassName("change")[0].setAttribute("onclick", "change1()");
    document.getElementById("submit-button").style.backgroundColor = "#FF3636";
    document.getElementById("submit-button").style.border = "1px white solid";

}

function change1() {
    document.getElementsByClassName("blitar-logo1")[0].style.display = "none";
    document.getElementsByClassName("blank-sq-2")[0].style.display = "none";
    document.getElementsByClassName("blitar-logo")[0].style.display = "block";
    document.getElementsByClassName("blank-sq-1")[0].style.display = "block";
    // Mengubah warna elemen-elemen tersebut
    elements.forEach(element => {
        element.style.color = '#1F1F30'; // ganti warna teks menjadi merah
    });
    menu.forEach(menu => {
        menu.style.backgroundColor = '#1F1F30';
    });
    document.getElementsByClassName("alas")[0].style.backgroundColor = "transparent";
    // document.getElementById("bg").style.display = "block";
    document.getElementById("submit-button").style.backgroundColor = "#FFFFFF";
    document.getElementById("submit-button").style.border = "1px white solid";
    document.getElementsByClassName("change")[0].setAttribute("onclick", "change()");
}

function burger() {
    document.querySelector('#burger > span:nth-child(1)').style.transform = "translateY(180%)";
    document.querySelector('#burger > span:nth-child(3)').style.transform = "translateY(-180%)";
    document.getElementsByClassName("nav-content-2")[0].style.transform = "translateX(0)";




    document.getElementById("burger").setAttribute("onclick", "back()");
}

function back() {
    document.querySelector('#burger > span:nth-child(1)').style.transform = "translateY(0)";
    document.querySelector('#burger > span:nth-child(3)').style.transform = "translateY(0)";
    document.getElementsByClassName("nav-content-2")[0].style.transform = "translateX(-100%)";


    document.getElementById("burger").setAttribute("onclick", "burger()");
}


>>>>>>> 7d1af794462979fe3c19f53797fa84535e16440a
