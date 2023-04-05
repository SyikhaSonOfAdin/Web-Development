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


function sidemenu() {
    document.getElementById("side-menu").style.transform = "translateX(0)";
    document.getElementById("burger").setAttribute("onclick", "sidemenuInactive()") ;
}
function sidemenuInactive() {
    document.getElementById("side-menu").style.transform = "translateX(-100%)";
    document.getElementById("burger").setAttribute("onclick", "sidemenu()") ;
}
const ActiveKonsultasi = function () {
    document.getElementById('HomePage').style.display = 'none';
    document.getElementById('burger').style.display = 'none';
    document.getElementsByClassName('back-arrow3')[0].style.display = 'block';
    document.getElementById('Konsultasi').style.display = 'flex';
    document.getElementById('navbar').style.margin = '0px'
    document.getElementById("side-menu").style.display = "none";
};
const PrevKonsultasi = function () {
    document.getElementById('HomePage').style.display = 'block'
    document.getElementById('burger').style.display = 'block'
    document.getElementsByClassName('back-arrow3')[0].style.display = 'none'
    document.getElementById('Konsultasi').style.display = 'none'
    document.getElementById('navbar').style.margin = '0 0 30px 0'
    document.getElementById("side-menu").style.display = "flex";
}
const Page3 = document.getElementById('Konsultasi');
if (Page3.innerHTML == "") {
    const Peringatan = '<div id="warn-cont">' +
        '<lord-icon' +
        ' id="ITPerson"' +
        ' src="https://cdn.lordicon.com/gqqykmqo.json"' +
        ' trigger="loop"' +
        ' delay="8000"' +
        ' colors="outline:#121331,primary:#646e78,secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba"' +
        ' style="width: 150px; height: 150px">' +
        '</lord-icon>' +
        '<lord-icon' +
        ' src="https://cdn.lordicon.com/vyukcgvf.json"' +
        ' trigger="loop"' +
        ' delay="2000"' +
        ' colors="outline:#121331,primary:#ffc738,secondary:#92140c"' +
        ' style="width: 250px; height: 250px">' +
        '</lord-icon>' +
        '<h1>' +
        'UPSS! Terdapat Kesalahan!' +
        '</h1>' +
        '</div>';
    Page3.insertAdjacentHTML('afterbegin', Peringatan);
}


const ActiveProfile = function () {
    document.getElementById('HomePage').style.display = 'none';
    document.getElementById('burger').style.display = 'none';
    document.getElementsByClassName('back-arrow4')[0].style.display = 'block';
    document.getElementById('Profile').style.display = 'flex';
    document.getElementById('navbar').style.margin = '0px';
    document.getElementById("side-menu").style.display = "none";
};
const PrevProfile = function () {
    document.getElementById('HomePage').style.display = 'block'
    document.getElementById('burger').style.display = 'block'
    document.getElementsByClassName('back-arrow4')[0].style.display = 'none'
    document.getElementById('Profile').style.display = 'none'
    document.getElementById('navbar').style.margin = '0 0 30px 0'
    document.getElementById("side-menu").style.display = "flex";
}
const Page4 = document.getElementById('Profile');
if (Page4.innerHTML == "") {
    const Peringatan = '<div id="warn-cont">' +
        '<lord-icon' +
        ' id="ITPerson"' +
        ' src="https://cdn.lordicon.com/gqqykmqo.json"' +
        ' trigger="loop"' +
        ' delay="8000"' +
        ' colors="outline:#121331,primary:#646e78,secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba"' +
        ' style="width: 150px; height: 150px">' +
        '</lord-icon>' +
        '<lord-icon' +
        ' src="https://cdn.lordicon.com/vyukcgvf.json"' +
        ' trigger="loop"' +
        ' delay="2000"' +
        ' colors="outline:#121331,primary:#ffc738,secondary:#92140c"' +
        ' style="width: 250px; height: 250px">' +
        '</lord-icon>' +
        '<h1>' +
        'UPSS! Terdapat Kesalahan!' +
        '</h1>' +
        '</div>';
    Page4.insertAdjacentHTML('afterbegin', Peringatan);
}


const ActivePengaturan = function () {
    document.getElementById('HomePage').style.display = 'none';
    document.getElementById('burger').style.display = 'none';
    document.getElementsByClassName('back-arrow5')[0].style.display = 'block';
    document.getElementById('Pengaturan').style.display = 'flex';
    document.getElementById('navbar').style.margin = '0px';
    document.getElementById("side-menu").style.display = "none";
};
const PrevPengaturan = function () {
    document.getElementById('HomePage').style.display = 'block'
    document.getElementById('burger').style.display = 'block'
    document.getElementsByClassName('back-arrow5')[0].style.display = 'none'
    document.getElementById('Pengaturan').style.display = 'none'
    document.getElementById('navbar').style.margin = '0 0 30px 0'
    document.getElementById("side-menu").style.display = "flex";
}
const Page5 = document.getElementById('Pengaturan');
if (Page5.innerHTML == "") {
    const Peringatan = '<div id="warn-cont">' +
        '<lord-icon' +
        ' id="ITPerson"' +
        ' src="https://cdn.lordicon.com/gqqykmqo.json"' +
        ' trigger="loop"' +
        ' delay="8000"' +
        ' colors="outline:#121331,primary:#646e78,secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba"' +
        ' style="width: 150px; height: 150px">' +
        '</lord-icon>' +
        '<lord-icon' +
        ' src="https://cdn.lordicon.com/vyukcgvf.json"' +
        ' trigger="loop"' +
        ' delay="2000"' +
        ' colors="outline:#121331,primary:#ffc738,secondary:#92140c"' +
        ' style="width: 250px; height: 250px">' +
        '</lord-icon>' +
        '<h1>' +
        'UPSS! Terdapat Kesalahan!' +
        '</h1>' +
        '</div>';
    Page5.insertAdjacentHTML('afterbegin', Peringatan);
}


const ActiveToko = function () {
    document.getElementById('HomePage').style.display = 'none';
    document.getElementById('burger').style.display = 'none';
    document.getElementsByClassName('back-arrow6')[0].style.display = 'block';
    document.getElementById('Toko').style.display = 'flex';
    document.getElementById('navbar').style.margin = '0px';
    document.getElementById("side-menu").style.display = "none";
};
const PrevToko = function () {
    document.getElementById('HomePage').style.display = 'block'
    document.getElementById('burger').style.display = 'block'
    document.getElementsByClassName('back-arrow6')[0].style.display = 'none'
    document.getElementById('Toko').style.display = 'none'
    document.getElementById('navbar').style.margin = '0 0 30px 0'
    document.getElementById("side-menu").style.display = "flex";
}
const Page6 = document.getElementById('Toko');
if (Page6.innerHTML == "") {
    const Peringatan = '<div id="warn-cont">' +
        '<lord-icon' +
        ' id="ITPerson"' +
        ' src="https://cdn.lordicon.com/gqqykmqo.json"' +
        ' trigger="loop"' +
        ' delay="8000"' +
        ' colors="outline:#121331,primary:#646e78,secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba"' +
        ' style="width: 150px; height: 150px">' +
        '</lord-icon>' +
        '<lord-icon' +
        ' src="https://cdn.lordicon.com/vyukcgvf.json"' +
        ' trigger="loop"' +
        ' delay="2000"' +
        ' colors="outline:#121331,primary:#ffc738,secondary:#92140c"' +
        ' style="width: 250px; height: 250px">' +
        '</lord-icon>' +
        '<h1>' +
        'UPSS! Terdapat Kesalahan!' +
        '</h1>' +
        '</div>';
    Page6.insertAdjacentHTML('afterbegin', Peringatan);
}


// const ActivePedagangSekitar = function () {
//     document.getElementById('HomePage').style.display = 'none';
//     document.getElementById('burger').style.display = 'none';
//     document.getElementsByClassName('back-arrow2')[0].style.display = 'block';
//     document.getElementById('PedagangSekitar').style.display = 'flex';
//     document.getElementById('navbar').style.margin = '0px'
// };
// const PrevPedagangSekitar = function () {
//     document.getElementById('HomePage').style.display = 'block'
//     document.getElementById('burger').style.display = 'block'
//     document.getElementsByClassName('back-arrow2')[0].style.display = 'none'
//     document.getElementById('PedagangSekitar').style.display = 'none'
//     document.getElementById('navbar').style.margin = '0 0 30px 0'
// }
// const Page2 = document.getElementById('PedagangSekitar');
// if (Page2.innerHTML == "") {
//     const Peringatan = '<div id="warn-cont">' +
//         '<lord-icon' +
//         ' id="ITPerson"' +
//         ' src="https://cdn.lordicon.com/gqqykmqo.json"' +
//         ' trigger="loop"' +
//         ' delay="8000"' +
//         ' colors="outline:#121331,primary:#646e78,secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba"' +
//         ' style="width: 150px; height: 150px">' +
//         '</lord-icon>' +
//         '<lord-icon' +
//         ' src="https://cdn.lordicon.com/vyukcgvf.json"' +
//         ' trigger="loop"' +
//         ' delay="2000"' +
//         ' colors="outline:#121331,primary:#ffc738,secondary:#92140c"' +
//         ' style="width: 250px; height: 250px">' +
//         '</lord-icon>' +
//         '<h1>' +
//         'UPSS! Terdapat Kesalahan!' +
//         '</h1>' +
//         '</div>';
//     Page2.insertAdjacentHTML('afterbegin', Peringatan);
// }


