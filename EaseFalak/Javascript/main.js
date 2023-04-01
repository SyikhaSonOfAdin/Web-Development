
// VARIABLE
const WIB = [
    "ID-JI", "ID-JB", "ID-JA", "ID-BT", "ID-JK", "ID-KT", "ID-KB", "ID-BB", "ID-YO", "ID-LA", "ID-SS", "ID-BE",
    "ID-JT", "ID-SB", "ID-RI", "ID-SU", "ID-AC", "ID-KR"
];
const WITA = [
    "ID-ST", "ID-SR", "ID-SN", "ID-SG", "ID-SA", "ID-NT", "ID-NB", "ID-KU", "ID-KS", "ID-KI", "ID-GO", "ID-BA"
];
const WIT = [
    "ID-PB", "ID-PA", "ID-MU", "ID-MA"
];
var delay = 100;
let a = 1;
let bodyHeight = document.body.clientHeight;


// FUNCTION DECLARATION START
function byID_addClass(ID, kelas) {
    document.getElementById(`${ID}`).classList.add(`${kelas}`);
}
function byID_deleteClass(ID, kelas) {
    document.getElementById(`${ID}`).classList.remove(`${kelas}`);
}
function byID_changeClass(ID, PrevClass, NewClass) {
    document.getElementById(`${ID}`).classList.replace(`${PrevClass}`, `${NewClass}`);
}
function burger() {
    document.querySelector('#burger > span:nth-child(1)').style.transform = "translateY(12px)";
    document.querySelector('#burger > span:nth-child(3)').style.transform = "translateY(-13px)";
    document.getElementById("sideNav").style.display = "block";

    setTimeout(function () {
        document.querySelector('#burger > span:nth-child(2)').style.opacity = "0";
        document.getElementById("sideNav").style.transform = "translateY(0)";
        setTimeout(function () {
            // document.querySelector('#burger > span:nth-child(1)').style.transform = "rotate(-45deg)";
            // document.querySelector('#burger > span:nth-child(3)').style.transform = "rotate(45deg)";
            document.getElementById("burger").setAttribute("onclick", "back()");

        }, 300);
    }, 500);

}
function back() {
    document.querySelector('#burger > span:nth-child(1)').style.transform = "rotate(0deg)";
    document.querySelector('#burger > span:nth-child(3)').style.transform = "rotate(0deg)";
    document.body.style.overflow = "hidden";
    document.getElementById("sideNav").style.transform = "translateY(100%)";
    setTimeout(function () {
        document.querySelector('#burger > span:nth-child(2)').style.opacity = "1";
        setTimeout(function () {
            document.querySelector('#burger > span:nth-child(1)').style.transform = "translateY(0)";
            document.querySelector('#burger > span:nth-child(3)').style.transform = "translateY(0)";
            document.getElementById("burger").setAttribute("onclick", "burger()");
            document.getElementById("sideNav").style.display = "none";
            document.body.style.overflow = "scroll";
        }, 300);
    }, 500);
}
function WIBActived() {
    document.getElementById("WIB").classList.add("TZActived");
    document.getElementById("WITA").classList.remove("TZActived");
    document.getElementById("WIT").classList.remove("TZActived");
    document.querySelector('#WIB > h2').classList.add("TZActived-Content");
    document.querySelector('#WITA > h2').classList.remove("TZActived-Content");
    document.querySelector('#WIT > h2').classList.remove("TZActived-Content");
    for (let i = 0; i < WIB.length; i++) {
        const elem = document.querySelector(`#${WIB[i]} > path:nth-child(2)`);
        elem.setAttribute("fill", "#FFC107");
    }
    for (let f = 0; f < WITA.length; f++) {
        const inActived = document.querySelector(`#${WITA[f]} > path:nth-child(2)`);
        inActived.setAttribute("fill", "#B9D6F2");

    }
    for (let g = 0; g < WIT.length; g++) {
        const inActived1 = document.querySelector(`#${WIT[g]} > path:nth-child(2)`);
        inActived1.setAttribute("fill", "#B9D6F2");
    }
    document.querySelector('#WIB > svg > path:nth-child(1)').classList.add("AnimationActived");
    document.querySelector('#WIB > svg > path:last-child').classList.add("AnimationActived");

    document.querySelector('#WITA > svg > path:nth-child(1)').classList.remove("AnimationActived");
    document.querySelector('#WITA > svg > path:last-child').classList.remove("AnimationActived");

    document.querySelector('#WIT > svg > path:nth-child(1)').classList.remove("AnimationActived");
    document.querySelector('#WIT > svg > path:last-child').classList.remove("AnimationActived");

    byID_addClass("barat", "actived-content");
    byID_changeClass("tengah", "actived-content", "inactive-content");
    byID_changeClass("timur", "actived-content", "inactive-content");
}
function WITAActived() {
    document.getElementById("WITA").classList.add("TZActived");
    document.getElementById("WIT").classList.remove("TZActived");
    document.getElementById("WIB").classList.remove("TZActived");
    document.querySelector('#WITA > h2').classList.add("TZActived-Content");
    document.querySelector('#WIB > h2').classList.remove("TZActived-Content");
    document.querySelector('#WIT > h2').classList.remove("TZActived-Content");
    for (let i = 0; i < WIB.length; i++) {
        const elem = document.querySelector(`#${WIB[i]} > path:nth-child(2)`);
        elem.setAttribute("fill", "#B9D6F2");
    }
    for (let f = 0; f < WITA.length; f++) {
        const inActived = document.querySelector(`#${WITA[f]} > path:nth-child(2)`);
        inActived.setAttribute("fill", "#FFC107");

    }
    for (let g = 0; g < WIT.length; g++) {
        const inActived1 = document.querySelector(`#${WIT[g]} > path:nth-child(2)`);
        inActived1.setAttribute("fill", "#B9D6F2");
    }
    document.querySelector('#WITA > svg > path:nth-child(1)').classList.add("AnimationActived");
    document.querySelector('#WITA > svg > path:last-child').classList.add("AnimationActived");

    document.querySelector('#WIB > svg > path:nth-child(1)').classList.remove("AnimationActived");
    document.querySelector('#WIB > svg > path:last-child').classList.remove("AnimationActived");

    document.querySelector('#WIT > svg > path:nth-child(1)').classList.remove("AnimationActived");
    document.querySelector('#WIT > svg > path:last-child').classList.remove("AnimationActived");

    byID_changeClass("tengah", "inactive-content", "actived-content");
    byID_changeClass("barat", "actived-content", "inactive-content");
    byID_changeClass("timur", "actived-content", "inactive-content");
}
function WITActived() {
    document.getElementById("WIT").classList.add("TZActived");
    document.getElementById("WITA").classList.remove("TZActived");
    document.getElementById("WIB").classList.remove("TZActived");
    document.querySelector('#WIT > h2').classList.add("TZActived-Content");
    document.querySelector('#WIB > h2').classList.remove("TZActived-Content");
    document.querySelector('#WITA > h2').classList.remove("TZActived-Content");
    for (let i = 0; i < WIB.length; i++) {
        const elem = document.querySelector(`#${WIB[i]} > path:nth-child(2)`);
        elem.setAttribute("fill", "#B9D6F2");
    }
    for (let f = 0; f < WITA.length; f++) {
        const inActived = document.querySelector(`#${WITA[f]} > path:nth-child(2)`);
        inActived.setAttribute("fill", "#B9D6F2");

    }
    for (let g = 0; g < WIT.length; g++) {
        const inActived1 = document.querySelector(`#${WIT[g]} > path:nth-child(2)`);
        inActived1.setAttribute("fill", "#FFC107");
    }
    document.querySelector('#WIT > svg > path:nth-child(1)').classList.add("AnimationActived");
    document.querySelector('#WIT > svg > path:last-child').classList.add("AnimationActived");

    document.querySelector('#WITA > svg > path:nth-child(1)').classList.remove("AnimationActived");
    document.querySelector('#WITA > svg > path:last-child').classList.remove("AnimationActived");

    document.querySelector('#WIB > svg > path:nth-child(1)').classList.remove("AnimationActived");
    document.querySelector('#WIB > svg > path:last-child').classList.remove("AnimationActived");

    byID_changeClass("timur", "inactive-content", "actived-content");
    byID_changeClass("barat", "actived-content", "inactive-content");
    byID_changeClass("tengah", "actived-content", "inactive-content");
}
function firstFeature() {
    // TOMBOL
    byID_addClass("first-Feature", "actived-feature");
    byID_deleteClass("second-Feature", "actived-feature");
    byID_deleteClass("third-Feature", "actived-feature");
    byID_deleteClass("fourth-Feature", "actived-feature");
    // CONTENT
    byID_changeClass("waktuSholat", "inactive-content", "actived-content");
    byID_changeClass("awalBulan", "actived-content", "inactive-content");
    byID_changeClass("kalenderSeumurHidup", "actived-content", "inactive-content");
    byID_changeClass("kiblat", "actived-content", "inactive-content");

}
function secondFeature() {
    byID_addClass("second-Feature", "actived-feature");
    byID_deleteClass("first-Feature", "actived-feature");
    byID_deleteClass("third-Feature", "actived-feature");
    byID_deleteClass("fourth-Feature", "actived-feature");
    // CONTENT
    byID_changeClass("awalBulan", "inactive-content", "actived-content");
    byID_changeClass("waktuSholat", "actived-content", "inactive-content");
    byID_changeClass("kalenderSeumurHidup", "actived-content", "inactive-content");
    byID_changeClass("kiblat", "actived-content", "inactive-content");
}
function thirdFeature() {
    byID_addClass("third-Feature", "actived-feature");
    byID_deleteClass("first-Feature", "actived-feature");
    byID_deleteClass("second-Feature", "actived-feature");
    byID_deleteClass("fourth-Feature", "actived-feature");
    // CONTENT
    byID_changeClass("kalenderSeumurHidup", "inactive-content", "actived-content");
    byID_changeClass("waktuSholat", "actived-content", "inactive-content");
    byID_changeClass("awalBulan", "actived-content", "inactive-content");
    byID_changeClass("kiblat", "actived-content", "inactive-content");
}
function fourthFeature() {
    byID_addClass("fourth-Feature", "actived-feature");
    byID_deleteClass("first-Feature", "actived-feature");
    byID_deleteClass("second-Feature", "actived-feature");
    byID_deleteClass("third-Feature", "actived-feature");
    // CONTENT
    byID_changeClass("kiblat", "inactive-content", "actived-content");
    byID_changeClass("waktuSholat", "actived-content", "inactive-content");
    byID_changeClass("awalBulan", "actived-content", "inactive-content");
    byID_changeClass("kalenderSeumurHidup", "actived-content", "inactive-content");

}
function displayTime() {
    const now = new Date();
    const options = {
        timeZone: "Asia/Jakarta",
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    const wibTime = now.toLocaleTimeString("id-ID", options);
    options.timeZone = "Asia/Makassar";
    const witaTime = now.toLocaleTimeString("id-ID", options);
    options.timeZone = "Asia/Jayapura";
    const witTime = now.toLocaleTimeString("id-ID", options);
    document.querySelector('#waktuSholat > section > div:nth-child(1) > div > h2').innerHTML = wibTime;
    document.querySelector('#waktuSholat > section > div:nth-child(2) > div > h2').innerHTML = witaTime;
    document.querySelector('#waktuSholat > section > div:nth-child(3) > div > h2').innerHTML = witTime;
}

// LAIN LAIN
if (localStorage.getItem('pageShown') === null) {
    window.location.href = "./welcome.html";
    localStorage.setItem('pageShown', 'true');
}
document.querySelector('#kalenderSeumurHidup > h1').addEventListener('click', function () {
    a++;
    if (a % 2 == 0) {
        document.querySelector('#kalenderSeumurHidup > h1').innerHTML = 'Hijriah';
    }
    else {
        document.querySelector('#kalenderSeumurHidup > h1').innerHTML = 'Masehi';
    }
})
for (let i = 0; i < WIB.length; i++) {
    const elem = document.querySelector(`#${WIB[i]} > path:nth-child(2)`);
    elem.setAttribute("fill", "#FFC107");
    elem.setAttribute("onclick", "WIBActived()");
}
for (let f = 0; f < WITA.length; f++) {
    const inActived = document.querySelector(`#${WITA[f]} > path:nth-child(2)`);
    inActived.setAttribute("onclick", "WITAActived()");

}
for (let g = 0; g < WIT.length; g++) {
    const inActived1 = document.querySelector(`#${WIT[g]} > path:nth-child(2)`);
    inActived1.setAttribute("onclick", "WITActived()");
}
// memperbarui waktu setiap detik
setInterval(displayTime, 1000);
setTimeout(function(){
    document.getElementById("sideNav").style.height = `${bodyHeight}px`;
}, 1000) ;
