function obtenerFecha() {
  const fecha = new Date();
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "Noviembre",
    "Diciembre",
  ];
  const textoFecha = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  const tituloFecha = document.querySelector("h2");
  const reloj = document.querySelector("h3");

  tituloFecha.innerText = textoFecha;
  const horas = fecha.getHours().toString().padStart(2, "0");
  const minutos = fecha.getMinutes().toString().padStart(2, "0");
  const segundos = fecha.getSeconds().toString().padStart(2, "0");
  reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(obtenerFecha, 1000);
