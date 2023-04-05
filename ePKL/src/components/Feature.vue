<script>
  const TrackPage = function(){
    document.getElementById('navbar').style.display = 'none'
  }
</script>



<template>
  <!-- <div class="TrackPage">
    
  </div> -->
  <a href="link" id="feature1">
    <div class="feature">
      <lord-icon
        src="https://cdn.lordicon.com/fevpdbjk.json"
        trigger="hover"
        colors="primary:#121331,secondary:#3a3347,tertiary:#646e78,quaternary:#ffc738,quinary:#2ca58d,senary:#f9c9c0,septenary:#f24c00,octonary:#ebe6ef"
        style="width: 80px; height: 80px"
      >
      </lord-icon>
      <div class="circle"></div>
      <p>Track Pedagang</p>
    </div>
  </a>
  <a href="link" id="feature2">
    <div class="feature">
      <lord-icon
        src="https://cdn.lordicon.com/fihkmkwt.json"
        trigger="hover"
        colors="primary:#121331,secondary:#ffc638"
        state="hover-jump-spin"
        style="width: 80px; height: 80px"
      >
      </lord-icon>
      <div class="circle"></div>
      <p>Pedagang Sekitar</p>
    </div>
  </a>
  <a href="link" id="feature3">
    <div class="feature">
      <lord-icon
        src="https://cdn.lordicon.com/kjkiqtxg.json"
        trigger="hover"
        colors="outline:#121331,primary:#646e78,secondary:#ffc638,tertiary:#ebe6ef"
        style="width: 80px; height: 80px"
      >
      </lord-icon>
      <div class="circle"></div>
      <p>Konsultasi</p>
    </div>
  </a>
  <a href="link" id="feature4">
    <div class="feature">
      <lord-icon
        src="https://cdn.lordicon.com/vusrdugn.json"
        trigger="hover"
        colors="primary:#121331,secondary:#b26836,tertiary:#ffc638,quaternary:#f9c9c0,quinary:#ebe6ef"
        style="width: 80px; height: 80px"
      >
      </lord-icon>
      <div class="circle"></div>
      <p>Profile</p>
    </div>
  </a>
  <a href="link" id="feature5">
    <div class="feature">
      <lord-icon
        src="https://cdn.lordicon.com/oncyjozz.json"
        trigger="hover"
        colors="outline:#121331,primary:#ffc638"
        style="width: 80px; height: 80px"
      >
      </lord-icon>
      <div class="circle"></div>
      <p>Pengaturan</p>
    </div>
  </a>
  <a href="link" id="feature6">
    <div class="feature">
      <lord-icon
        src="https://cdn.lordicon.com/lzaszlqv.json"
        trigger="hover"
        colors="outline:#121331,primary:#ffc638,secondary:#b26836,tertiary:#f24c00,quaternary:#ffc638,quinary:#ebe6ef"
        style="width: 80px; height: 80px"
      >
      </lord-icon>
      <div class="circle"></div>
      <p>Toko</p>
    </div>
  </a>
</template>

<style scoped>
a {
  width: max-content;
  height: max-content;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  border: 1px #2e495e solid;
  border-radius: 8px;
  /* background-color: white; */
  transition: all 0.3s ease;
  background-color: #ffcc00;
  margin: 5px 5px;
}
a:hover {
  transform: scale(1.1);
  filter: drop-shadow(5px 4px 0px #2d485e);
}
.feature {
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 0;
  margin: 0;
}
a:hover .circle {
  transform: scale(1);
}
.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ff5513;
  /* transform: scale(0); */
  transition: all 0.4s ease;
  position: absolute;
  margin-bottom: 28px;
  z-index: 0;
}
p {
  font-size: 8px;
  color: #2e495e;
  font-style: normal;
  font-weight: 700;
  /* border: 1px black solid; */
}
lord-icon {
  width: 50px;
  height: 50px;
  z-index: 1;
  transition: all 0.3s ease;
}
a:hover lord-icon {
  filter: drop-shadow(5px 4px 0px #2d485e);
}
</style>
