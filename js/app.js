console.log(window)

// window.confirm('queres seguir realizando otra operacion')

function saludar (){
    document.write('<p>Hola!!!</p>')
}

function saludarPersona (nombre){
    document.write(`<p>Hola ${nombre} 😀</p>`)
}

function saludarMundo(){
    document.write('<p>Hola mundo 🎄</p>')
    if(contador === 10){
        //detener el setInterval
        clearInterval(idInterval)
    }
    contador++; //contador = contador+1
}



// setTimeout(saludar, 3000)
setTimeout(()=>document.write('<p>Hola!!!</p>'), 4000)
setTimeout(()=> saludarPersona('Tomas'), 2000)

//setInterval: ejecuta una funcion cada cierto tiempo en milisegundos
let contador =1;
const idInterval= setInterval(saludarMundo, 2000)