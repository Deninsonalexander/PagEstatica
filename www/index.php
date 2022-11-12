<?php
echo("Datos recibidos por metodo post:"), "<br />";
$correo = $_POST['correo'];
$clave = $_POST['clave'];

echo("Correo: ");
echo $correo, "<br />";
echo("Clave: ");
echo $clave;

?>