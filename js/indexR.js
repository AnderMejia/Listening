const imagenes = document.querySelector("img");
const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");

const procresoCaja = document.getElementById("procreso-barra");
const procreso = document.getElementById("procreso");

const tiempoActual = document.getElementById("tiempo-actual");
const duracion = document.getElementById("tiempo-duracion");

const musica = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Playlist de canciones
const canciones = [
  {
    name: "Mon Laferte -Mi Buen Amor",
    displayName: "Mi buen amor",
    artista: "Mon Laferte",
    imagen: "song1.jpg",
  },
  {
    name: "Hilito",
    displayName: "Hilito",
    artista: "Romeo Santos",
    imagen: "Hilito-Romeo.png",
  },
  {
    name: "CaritadeInocente",
    displayName: "Carita de inocente",
    artista: "Prince Royce",
    imagen: "CaritadeInocente.jpg",
  },
  {
    name: "MrSnowman",
    displayName: "Mr Snowman",
    artista: "Sia",
    imagen: "Snowman.png",
  },
  {
    name: "Pasarela",
    displayName: "Pasarela",
    artista: "Dalmata",
    imagen: "Pasarela.jpg",
  },
  {
    name: "Salvatore",
    displayName: "Salvatore",
    artista: "Lana del Rey",
    imagen: "Salvatore.jpg",
  },
];

//verificando si se esta reproduciendo  la musica

let sonando = false;

//funcion play y pause

function playSong() {
  sonando = true;
  playBtn.setAttribute("name", "pause");
  playBtn.setAttribute("tituo", "pause");
  musica.play();
}

function pauseSong() {
  sonando = false;
  playBtn.setAttribute("name", "play");
  playBtn.setAttribute("tituo", "play");
  musica.pause();
}

//Al hacer click se activa un evento que reproduce la cancion o la pausa
playBtn.addEventListener("click", () => (sonando ? pauseSong() : playSong()));

//funcion para cargar la cancion

function loadSong(canciones) {
  titulo.textContent = canciones.displayName;
  artista.textContent = canciones.artista;
  musica.src = `musica/${canciones.name}.mp3`;
  imagenes.src = `img/${canciones.imagen}`;
}

//cancion actual

let songIndex = 0;

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = canciones.length - 1;
  }
  loadSong(canciones[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > canciones.length - 1) {
    songIndex = 0;
  }
  loadSong(canciones[songIndex]);
  playSong();
}

loadSong(canciones[songIndex]);

//barra de proceso de la cancion

function updateProgressBarra(e) {
  if (sonando) {
    const { duration, currentTime } = e.srcElement;
    const progresoBarra = (currentTime / duration) * 100;
    procreso.style.width = `${progresoBarra}%`;
    const duracionMinutos = Math.floor(duration / 60);
    let duracionSegundos = Math.floor(duration % 60);

    if (duracionSegundos < 10) {
      duracionSegundos = `0${duracionSegundos}`;
    }
    if (duracionSegundos) {
      duracion.textContent = `${duracionMinutos}:${duracionSegundos}`;
    }
    const minutosTotal = Math.floor(currentTime / 60);
    let segundosTotal = Math.floor(currentTime % 60);

    if (segundosTotal < 10) {
      segundosTotal = `0${segundosTotal}`;
    }

    if (segundosTotal) {
      tiempoActual.textContent = `${minutosTotal}:${segundosTotal}`;
    }
  }
}

//mostrando la barra

function setProgreso(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = musica;
  musica.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
musica.addEventListener("ended", nextSong);
musica.addEventListener("timeupdate", updateProgressBarra);
procresoCaja.addEventListener("click", setProgreso);
