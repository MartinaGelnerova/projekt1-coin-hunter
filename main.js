// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

let mince = document.querySelector('#mince');
let panacek = document.querySelector('#panacek');

// tady řeším NÁHODNÉ UMÍSTĚNÍ MINCE A PANÁČKA po celé ploše minus 36px (v/š mince), aby se mi neschovala
var w = window.innerWidth;
var h = window.innerHeight;
var panacekH = 70;
var panacekW = 64;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
mince.style.left = `${getRandomInt(0, w + 1 - panacekW)}px`;
mince.style.top = `${getRandomInt(0, h + 1 - panacekH)}px`;
panacek.style.left = `${getRandomInt(0, w + 1 - panacekW)}px`;
panacek.style.top = `${getRandomInt(0, h + 1 - panacekH)}px`;

//tady řeším POHYB A ZMĚNA OBRÁZKU PANÁČKA při stisku šipek + omezení pohybu na viditelnou plochu
function stiskKlavesy (event) {
  let klavesa = event.keyCode;
  console.log(klavesa);
  if (klavesa === 37) { //left
    document.getElementById('panacek').src = `obrazky/panacek-vlevo.png`;
    panacekPoziceHor = parseInt(panacek.style.left)
    if (panacekPoziceHor > 0 + 10) {
      panacekPoziceHor = panacekPoziceHor -10;
      panacek.style.left = `${panacekPoziceHor}px`;
    }
  } else if (klavesa === 38) { //up
    document.getElementById('panacek').src = `obrazky/panacek-nahoru.png`;
    panacekPoziceVer = parseInt(panacek.style.top)
    if (panacekPoziceVer > 0 + 10) {
      panacekPoziceVer = panacekPoziceVer -10;
      panacek.style.top = `${panacekPoziceVer}px`;
    }
  } else if (klavesa === 39) { //right
    document.getElementById('panacek').src = `obrazky/panacek-vpravo.png`;
    panacekPoziceHor = parseInt(panacek.style.left)
    if ((panacekPoziceHor + panacekW) < w - 10) {
      panacekPoziceHor = panacekPoziceHor +10;
      panacek.style.left = `${panacekPoziceHor}px`;
    }
  } else if (klavesa === 40) { //down
    document.getElementById('panacek').src = `obrazky/panacek.png`;
    panacekPoziceVer = parseInt(panacek.style.top)
    if ((panacekPoziceVer + panacekH) < h - 10) {
      panacekPoziceVer = panacekPoziceVer +10;
      panacek.style.top = `${panacekPoziceVer}px`;
    }
  }
}