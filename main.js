// nadefinujeme globální proměnné
// ty jsou pak použitelné kdekoliv v programu
let panacek = document.querySelector('#panacek');
let mince = document.querySelector('#mince');
let panacekSirka = panacek.naturalWidth;
let panacekVyska = panacek.naturalHeight;
let minceSirka = mince.naturalWidth;
let minceVyska = mince.naturalHeight;
let windowW = window.innerWidth;
let windowH = window.innerHeight;
let audioFile = document.getElementById('hudba');
let zvukMince = document.getElementById('zvukmince');
let zvukFanfara = document.getElementById('zvukfanfara');
audioFile.play();


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky
function priNacteniStranky() {
	novaMince();
  umistiPanacka();
  document.getElementById('score').innerHTML = 0;
}

// funkce, která umístí panáčka na jeho souřadnice
// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
function umistiPanacka() {
  panacek.style.left = `${(windowW/2 - panacekSirka/2)}px`;
  panacek.style.top = `${(windowH/2 - panacekVyska/2)}px`;
}

// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice
function novaMince() {
  mince.style.left = `${getRandomInt(0, windowW + 1 - minceSirka)}px`;
  mince.style.top = `${getRandomInt(0, windowH + 1 - minceVyska)}px`;
}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události¨
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
function priStiskuKlavesy(event) {
  let klavesa = event.keyCode;
  console.log(klavesa);
  panacekX = parseInt(panacek.style.left);
  panacekY = parseInt(panacek.style.top);
  minceX = parseInt(mince.style.left);
  minceY = parseInt(mince.style.top);
  krok = 10;
  //let fanfara = document.getElementById('zvukfanfara');
  if (klavesa === 37) { //left
    document.getElementById('panacek').src = `obrazky/panacek-vlevo.png`;
    if (panacekX > (0 + krok)) {
      panacekX = panacekX - krok;
      panacek.style.left = `${panacekX}px`;
      otestujKolizi();
      vyhra()
    }
  } else if (klavesa === 38) { //up
    document.getElementById('panacek').src = `obrazky/panacek-nahoru.png`;
    if (panacekY > (0 + krok)) {
      panacekY = panacekY - krok;
      panacek.style.top = `${panacekY}px`;
      otestujKolizi();
      vyhra()
    }
  } else if (klavesa === 39) { //right
    document.getElementById('panacek').src = `obrazky/panacek-vpravo.png`;
    if ((panacekX + krok) < (windowW - panacekSirka)) {
      panacekX = panacekX + krok;
      panacek.style.left = `${panacekX}px`;
      otestujKolizi();
      vyhra()
    }
  } else if (klavesa === 40) { //down
    document.getElementById('panacek').src = `obrazky/panacek.png`;
    if ((panacekY + krok) < (windowH - panacekVyska)) {
      panacekY = panacekY + krok;
      panacek.style.top = `${panacekY}px`;
      otestujKolizi();
      vyhra()
    }
  }
}

// fuknce pro otestování kolize panáčka s mincí
function otestujKolizi() {
  let skore = parseInt(document.getElementById('score').innerHTML);
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
    zvukMince.play();
    console.log('Zvuk mince...');
    skore = skore + 1;
    document.getElementById('score').innerHTML = skore;
    novaMince();
  }
}

function vyhra(){
  let skore = parseInt(document.getElementById('score').innerHTML);
  if (skore === 5) {
    document.getElementById('score').innerHTML = `${skore} => VYHRÁL JSI!`
    zvukFanfara.play();
    console.log('Zvuk fanfáry...');
  }
}