function cambiarHeaderDos (nuevoH) {
    document.getElementsByTagName("h2")[0].innerHTML = nuevoH;
}

function cambios2000() {
    let headerDos = document.getElementsByTagName("h2")[0].innerHTML;
    if (headerDos == "Belinda y Nodal") {
        cambiarHeaderDos("Aaaaa");
    }
    else {
        cambiarHeaderDos("Belinda y Nodal");
    }
};

//Script que se va a unir a la BeliPage
console.log("Me parece una falta de respeto");
window.alert("Me parece una falta de respeto!!");


//setInterval da un intervalo de tiempo
//tiene sintaxis: (funcion, cadacCuantosMilisegundos)
setInterval(cambios2000, 2000)