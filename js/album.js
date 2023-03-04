let album = document.getElementById("nombre");
let artista = document.getElementById("artista");
let descripcion = document.getElementById("desc");

let nAlbum = document.getElementById("nAlbum");

const albumes = [
  {
    nombre: "AJR",
    artistaC: "OK Orchestra",
    descrip: "haksdbaksbdabsdhabsdhabdaj,bda,jdjabbdhsbhfbdfbdshfbsmhfshdfh",
  },
  {
    nombre: "Adele",
    artistaC: "OK Orchestra",
    descrip: "haksdbaksbdabsdhabsdhabdaj,bda,jdjabbdhsbhfbdfbdshfbsmhfshdfh",
  },
];
let i;
let index;
function sacarVariable() {
  i = albumes[0];
  nom = nAlbum.value;
  if (i.nombre == nom) {
    index = 0;
  } else {
    index = 1;
  }
  window.location.href = "tarjetaAlbumes.html";
}
function tarjeta() {
  valor = albumes[0];
  album.textContent = valor.nombre;
  artista.textContent = valor.artistaC;
  descripcion.textContent = valor.descrip;
}
