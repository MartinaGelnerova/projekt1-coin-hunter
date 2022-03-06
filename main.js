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
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
mince.style.left = `${getRandomInt(0, w+1-36)}px`;
mince.style.top = `${getRandomInt(0, h+1-36)}px`;
panacek.style.left = `${getRandomInt(0, w+1-64)}px`;
panacek.style.top = `${getRandomInt(0, h+1-70)}px`;

//tady řeším POHYB A ZMĚNA OBRÁZKU PANÁČKA při stisku šipek
function stiskKlavesy (event) {
  let klavesa = event.keyCode;
  console.log(klavesa);
  if (klavesa === 37) { //left
    panacekPoziceHor = parseInt(panacek.style.left) -10;
    panacek.style.left = `${panacekPoziceHor}px`;
    document.getElementById('panacek').src = `obrazky/panacek-vlevo.png`;
  } else if (klavesa === 38) { //up
    panacekPoziceVer = parseInt(panacek.style.top) -10;
    panacek.style.top = `${panacekPoziceVer}px`;
    document.getElementById('panacek').src = `obrazky/panacek-nahoru.png`;
  } else if (klavesa === 39) { //right
    panacekPoziceHor = parseInt(panacek.style.left) +10;
    panacek.style.left = `${panacekPoziceHor}px`;
    document.getElementById('panacek').src = `obrazky/panacek-vpravo.png`;
  } else if (klavesa === 40) { //up
    panacekPoziceVer = parseInt(panacek.style.top) +10;
    panacek.style.top = `${panacekPoziceVer}px`;
    document.getElementById('panacek').src = `obrazky/panacek.png`;
  }
}
