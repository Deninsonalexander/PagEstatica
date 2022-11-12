function obtenerdatos(){
    var correo = document.getElementById('correo').value;
    var clave = document.getElementById('clave').value;

    if (clave === ""){
        alert("digite clave")
    }
    else{
        alert("Su correo es " + correo +" su clave es "+ clave)
        document.getElementById("registro").reset();
    }
    
}

function registroDatos(){
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var clave = document.getElementById('clave').value;
    var celular = document.getElementsById('celular').value;
    
    alert("Su correo es " + correo +" su clave es "+ clave)
    document.getElementById("contenido").reset();

}
