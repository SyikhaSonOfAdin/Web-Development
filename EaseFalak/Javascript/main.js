<<<<<<< HEAD
<<<<<<< HEAD

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
let loop = 0;

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
    document.getElementById("sideNav").style.display = "flex";

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

    // byID_addClass("barat", "actived-content");
    // byID_changeClass("tengah", "actived-content", "inactive-content");
    // byID_changeClass("timur", "actived-content", "inactive-content");


    let value = document.getElementById("input-text").value;
    document.querySelector('section > div > h2').innerHTML = `${value}`;

    document.querySelector('section > div > div > h5').innerHTML = "WIB";

    setInterval(function () {
        const now = new Date();
        const options = {
            timeZone: "Asia/Jakarta",
            hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        const wibTime = now.toLocaleTimeString("id-ID", options);
        document.querySelector('#waktuSholat > section > div:nth-child(1) > div > h2').innerHTML = wibTime;
    });

    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(1)').classList.add("actived-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(2)').classList.add("inactive-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(3)').classList.add("inactive-content");


    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(1)').classList.replace("inactive-content", "actived-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(2)').classList.replace("actived-content", "inactive-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(3)').classList.replace("actived-content", "inactive-content");
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

    // byID_changeClass("tengah", "inactive-content", "actived-content");
    // byID_changeClass("barat", "actived-content", "inactive-content");
    // byID_changeClass("timur", "actived-content", "inactive-content");

    let value = document.getElementById("input-text").value;
    document.querySelector('section > div > h2').innerHTML = `${value}`;

    document.querySelector('section > div > div > h5').innerHTML = "WITA";

    setInterval(function () {
        const now = new Date();
        const options = {
            timeZone: "Asia/Jakarta",
            hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        options.timeZone = "Asia/Makassar";
        const witaTime = now.toLocaleTimeString("id-ID", options);
        document.querySelector('#waktuSholat > section > div:nth-child(1) > div > h2:nth-child(2)').innerHTML = witaTime;
    }, 1000);


    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(1)').classList.replace("actived-content", "inactive-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(2)').classList.replace("inactive-content", "actived-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(3)').classList.replace("actived-content", "inactive-content");
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

    // byID_changeClass("timur", "inactive-content", "actived-content");
    // byID_changeClass("barat", "actived-content", "inactive-content");
    // byID_changeClass("tengah", "actived-content", "inactive-content");

    let value = document.getElementById("input-text").value;
    document.querySelector('section > div > h2').innerHTML = `${value}`;

    document.querySelector('section > div > div > h5').innerHTML = "WIT";

    setInterval(function () {
        const now = new Date();
        const options = {
            timeZone: "Asia/Jakarta",
            hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        options.timeZone = "Asia/Jayapura";
        const witTime = now.toLocaleTimeString("id-ID", options);
        document.querySelector('#waktuSholat > section > div:nth-child(1) > div > h2:nth-child(3)').innerHTML = witTime;
    }, 1000);

    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(1)').classList.replace("actived-content", "inactive-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(2)').classList.replace("actived-content", "inactive-content");
    document.querySelector('section > div:nth-child(1) > div > h2:nth-child(3)').classList.replace("inactive-content", "actived-content");
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
// function displayTime() {
//     const now = new Date();
//     const options = {
//         timeZone: "Asia/Jakarta",
//         hour12: false,
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//     };
//     const wibTime = now.toLocaleTimeString("id-ID", options);
//     options.timeZone = "Asia/Makassar";
//     const witaTime = now.toLocaleTimeString("id-ID", options);
//     options.timeZone = "Asia/Jayapura";
//     const witTime = now.toLocaleTimeString("id-ID", options);
//     document.querySelector('#waktuSholat > section > div:nth-child(1) > div > h2').innerHTML = wibTime;
//     document.querySelector('#waktuSholat > section > div:nth-child(2) > div > h2').innerHTML = witaTime;
//     document.querySelector('#waktuSholat > section > div:nth-child(3) > div > h2').innerHTML = witTime;
// }
function proses() {
    const inputText = document.getElementById("input-text").value;
    console.log(`Anda memasukkan teks: ${inputText}`);
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "b36a7e571amsh1d1833c029b3e48p14092djsn6e5ac97bae1a",
            "X-RapidAPI-Host": "muslimsalat.p.rapidapi.com",
        },
    };

    fetch(`https://muslimsalat.p.rapidapi.com/${inputText}.json`, options)
        .then((response) => response.json())
        .then((response) => {
            const jadwalSholat = response.items[0];
            const jadwalSholatList = document.getElementById("sholat-cont");
            let i = 0;
            const utc = response.timezone;
            const data = [
                "Tanggal",
                "Subuh",
                "Fajar",
                "Dzuhur",
                "Ashar",
                "Maghrib",
                "Isya",
            ];
            if (utc == 7) {
                WIBActived();
            }
            else if (utc == 8) {
                WITAActived();
            }
            else if (utc == 9) {
                WITActived();
            }

            if (document.getElementById("sholat-cont").childElementCount == 0) {
                for (const jadwal in jadwalSholat) {
                    const trEl = document.createElement("tr");
                    const tdEL1 = document.createElement("td");
                    const tdEL2 = document.createElement("td");
                    tdEL1.innerText = `${data[i]}`;
                    tdEL2.innerText = `${jadwalSholat[jadwal]}`;
                    trEl.appendChild(tdEL1);
                    trEl.appendChild(tdEL2);
                    jadwalSholatList.appendChild(trEl);
                    i++;
                }
            }
            else {
                const sholatCont = document.getElementById("sholat-cont");
                while (sholatCont.firstChild) {
                    sholatCont.removeChild(sholatCont.firstChild);
                }

                for (const jadwal in jadwalSholat) {
                    const trEl = document.createElement("tr");
                    const tdEL1 = document.createElement("td");
                    const tdEL2 = document.createElement("td");
                    tdEL1.innerText = `${data[i]}`;
                    tdEL2.innerText = `${jadwalSholat[jadwal]}`;
                    trEl.appendChild(tdEL1);
                    trEl.appendChild(tdEL2);
                    jadwalSholatList.appendChild(trEl);
                    i++;
                }
            }

        })
        .catch((err) => console.error(err));
}

function Qibla() {
    // Mendapatkan lokasi pengguna
    navigator.geolocation.getCurrentPosition(function (position) {
        // Mendapatkan koordinat lat dan long pengguna
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "b36a7e571amsh1d1833c029b3e48p14092djsn6e5ac97bae1a",
                "X-RapidAPI-Host": "qibla-direction.p.rapidapi.com",
            },
        };

        fetch(
            `https://qibla-direction.p.rapidapi.com/?latitude=${lat}&longitude=${long}`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                const degree = response.degree;
                const direction = response.direction;
                document.getElementById("arah").innerHTML = `${degree}° ${direction}` ;
                document.getElementById("needle").style.transform = `rotate(${degree}deg)` ;
            })
            .catch((err) => console.error(err));
    });
}
// LAIN LAIN


proses();

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

setTimeout(function () {
    document.getElementById("sideNav").style.height = `${bodyHeight}px`;
}, 1000);

setInterval(Qibla(), 200) ;
=======

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
>>>>>>> 7d1af794462979fe3c19f53797fa84535e16440a
=======

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
>>>>>>> 7d1af794462979fe3c19f53797fa84535e16440a
