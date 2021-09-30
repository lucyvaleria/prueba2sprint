//Funcion global

function agregarRegistro() {
    // console.log("capturado");

    function capturar(apellido, nombre, telefono, correo, contrasena) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    let nombrecapturar = document.getElementById("nombre").value;
    let apellidocapturar = document.getElementById("apellido").value;
    let telefonocapturar = document.getElementById('telefono').value;
    let correocapturar = document.getElementById('correo').value;
    let contrasenacapturar = document.getElementById('contrasena').value;
    // console.log(nombrecapturar, apellidocapturar, telefonocapturar, correocapturar, contrasenacapturar);

    // arreglo global
    nuevosujeto = new capturar(apellidocapturar, nombrecapturar, telefonocapturar, correocapturar, contrasenacapturar);
    agregar();
    console.log(nuevosujeto);
    return arreglo;
}

var arreglo = [];

function agregar() {
    console.log("capturado");
    // añadir elemento
    arreglo.push(nuevosujeto);
    console.log(arreglo);
    return arreglo;
}

function ordenarArreglo() {
    arreglo.sort((a, b) => {
    const apellidoA = a.apellido;
    const apellidoB = b.apellido;
    if (apellidoA < apellidoB){
        return -1;
    }
    if (apellidoA > apellidoB){
        return 1;
    }
    return 0;
    });
    console.log(arreglo);
    return arreglo;
}

function filtrarCorreo() {
    let regCorreo =  /[a-zA-Z0-9_.+-]+@gmail.com/;
    let arregloCorreo = [];
    for (let i = 0; i < arreglo.length; i++) {
        let correo = arreglo[i].correo;
        let valCorreo = regCorreo.test(correo);
        if (valCorreo === true) {
            arregloCorreo.push(correo);
        }
    }
    console.log(arregloCorreo);
    return arregloCorreo;
}

module.exports = { agregarRegistro,ordenarArreglo,filtrarCorreo };








// function agregarRegistro() {
//     console.log("Funciona");
//     let lstformulario = document.getElementById("form-registro").value;
//             arrayGuardar = [];
//             console.log(arrayGuardar)         
//         for (var i = 0; i < lstformulario.lenght; i++) {    
//             arrayGuardar[i] = lstformulario[i].value;
//             console.log (arrayGuardar[i].value);     
//             }
// }

//module.exports = { agregarRegistro };