 const CONTRASENA_ADMIN = "admin123"; // 🔑 Cambia aquí la contraseña

    function verificar() {
      const input = document.getElementById("password").value;
      const error = document.getElementById("error");

      if (input === CONTRASENA_ADMIN) {
        // Redirige al contenido protegido
        window.location.href = "./Doc/investigacion-professional-s.pdf";
      } else {
        error.style.display = "block";
      }
    }