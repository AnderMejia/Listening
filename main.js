let usuario = document.getElementById("usuario");
let password = document.getElementById("contraseña");

var user = [
  { name: "Juan", pass: "hola123" },
  { name: "Pedro15", pass: "adios25" },
];

function validacion() {
  var usua = usuario.value.trim();
  var passw = password.value.trim();
  valorIndex = 0;
  valor = user[valorIndex];
  while (user.length != valorIndex) {
    if (valor.name == usua && valor.pass == passw) {
      window.location = "inicio.html";
      alert("usuario correcto");
      // window.location.assign("inicio.html");
      // window.open("inicio.html");
      
     
      break;
    } else {
      valorIndex++;
      valor = user[valorIndex];
    }
  }
}
