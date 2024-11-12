function obtenerFecha(){
    const fecha = new Date()
    // console.log(fecha.getDate()) // devuelve el numero del día del mes
    // console.log(fecha.getDay()) // 0 - 6, siendo 0 el domingo
    // console.log(fecha.getMonth())
    // console.log(fecha.getFullYear())
    // console.log(fecha.getMinutes())
    // console.log(fecha.getHours())
    // console.log(fecha.getSeconds())
    const diasSemana= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const meses = ['Enero', 'Febrero','M','A','M','J','J','A','S','O','Noviembre', 'Diciembre']
    
    // console.log(diasSemana[fecha.getDay()])
    // console.log(meses[fecha.getMonth()])
    
    const textoFecha = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`
    // console.log(textoFecha)
    
    //buscar el h2 que tiene la fecha
    const tituloFecha = document.querySelector('h2');
    const reloj = document.querySelector('h3');
    // console.log(tituloFecha)
    
    tituloFecha.innerText = textoFecha
    reloj.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
}

setInterval(obtenerFecha,1000)
