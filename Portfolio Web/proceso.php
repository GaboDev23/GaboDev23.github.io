<?php
function limpiar($dato) {
    return htmlspecialchars(trim($dato), ENT_QUOTES, 'UTF-8');
}

// Obtener y limpiar datos
$nombre   = limpiar($_POST['nombre'] ?? '');
$empresa  = limpiar($_POST['empresa'] ?? '');
$email    = limpiar($_POST['email'] ?? '');
$telefono = limpiar($_POST['telefono'] ?? '');
$detalles = limpiar($_POST['detalles'] ?? '');

// Validar campos requeridos
$errores = [];

if ($nombre === '') $errores[] = "El nombre es obligatorio.";
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errores[] = "Correo inválido.";
if ($telefono === '' || !preg_match('/^\+?[0-9\s\-()]{7,20}$/', $telefono)) $errores[] = "Teléfono inválido.";
if ($detalles === '') $errores[] = "Por favor, proporciona detalles.";

// Si hay errores, detener
if (!empty($errores)) {
    http_response_code(400);
    echo implode("<br>", $errores);
    exit;
}

// Enviar correo
$para = "gabo.gh12398@gmail.com";
$asunto = "Nuevo formulario desde el sitio";
$mensaje = "Nombre: $nombre\nEmpresa: $empresa\nEmail: $email\nTeléfono: $telefono\nDetalles:\n$detalles";

mail($para, $asunto, $mensaje);

echo "Formulario procesado correctamente.";
?>
