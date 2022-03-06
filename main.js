// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

let mince = document.querySelector('#mince');
let panacek = document.querySelector('#panacek');
let audioFile = document.getElementById('hudba');
  
// tady řeším NÁHODNÉ UMÍSTĚNÍ MINCE A PANÁČKA po celé ploše minus 36px (v/š mince), aby se mi neschovala
var windowW = window.innerWidth;
var windowH = window.innerHeight;
var panacekSirka = panacek.naturalWidth;
var panacekVyska = panacek.naturalHeight;
var minceSirka = mince.naturalWidth;
var minceVyska = mince.naturalHeight;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
mince.style.left = `${getRandomInt(0, windowW + 1 - minceSirka)}px`;
mince.style.top = `${getRandomInt(0, windowH + 1 - minceVyska)}px`;
panacek.style.left = `${getRandomInt(0, windowW + 1 - panacekSirka)}px`;
panacek.style.top = `${getRandomInt(0, windowH + 1 - panacekVyska)}px`;

//tady řeším POHYB A ZMĚNA OBRÁZKU PANÁČKA při stisku šipek + omezení pohybu na viditelnou plochu
function stiskKlavesy (event) {
  let klavesa = event.keyCode;
  console.log(klavesa);
  panacekX = parseInt(panacek.style.left);
  panacekY = parseInt(panacek.style.top);
  minceX = parseInt(mince.style.left);
  minceY = parseInt(mince.style.top);
  krok = 10;
  let skore = parseInt(document.getElementById('score').innerHTML);
  audioFile.play();
  let zvukMince = document.getElementById('zvukmince');
    if (klavesa === 37) { //left
    document.getElementById('panacek').src = `obrazky/panacek-vlevo.png`;
    if (panacekX > (0 + krok)) {
      panacekX = panacekX - krok;
      panacek.style.left = `${panacekX}px`;
      if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        zvukMince.play();
        console.log('Zvuk mince...');
        skore = skore + 1;
        document.getElementById('score').innerHTML = skore;
        mince.style.left = `${getRandomInt(0, windowW + 1 - minceSirka)}px`;
        mince.style.top = `${getRandomInt(0, windowH + 1 - minceVyska)}px`;
      }
    }
  } else if (klavesa === 38) { //up
    document.getElementById('panacek').src = `obrazky/panacek-nahoru.png`;
    if (panacekY > (0 + krok)) {
      panacekY = panacekY - krok;
      panacek.style.top = `${panacekY}px`;
      if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        zvukMince.play();
        console.log('Zvuk mince...');
        skore = skore + 1;
        document.getElementById('score').innerHTML = skore;
        mince.style.left = `${getRandomInt(0, windowW + 1 - minceSirka)}px`;
        mince.style.top = `${getRandomInt(0, windowH + 1 - minceVyska)}px`;
      }
    }
  } else if (klavesa === 39) { //right
    document.getElementById('panacek').src = `obrazky/panacek-vpravo.png`;
    if ((panacekX + krok) < (windowW - panacekSirka)) {
      panacekX = panacekX + krok;
      panacek.style.left = `${panacekX}px`;
      if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        zvukMince.play();
        console.log('Zvuk mince...');
        skore = skore + 1;
        document.getElementById('score').innerHTML = skore;
        mince.style.left = `${getRandomInt(0, windowW + 1 - minceSirka)}px`;
        mince.style.top = `${getRandomInt(0, windowH + 1 - minceVyska)}px`;
      }
    }
  } else if (klavesa === 40) { //down
    document.getElementById('panacek').src = `obrazky/panacek.png`;
    if ((panacekY + krok) < (windowH - panacekVyska)) {
      panacekY = panacekY + krok;
      panacek.style.top = `${panacekY}px`;
      if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        zvukMince.play();
        console.log('Zvuk mince...');
        skore = skore + 1;
        document.getElementById('score').innerHTML = skore;
        mince.style.left = `${getRandomInt(0, windowW + 1 - minceSirka)}px`;
        mince.style.top = `${getRandomInt(0, windowH + 1 - minceVyska)}px`;
      }
    }
  }
}