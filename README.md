# JWT

La idea es ejemplificar un flujo completo de autenticación basado en JWT, por ello hay 2 proyectos: 
    - Backend: Servidor que expone los endpoints de la API y contiene la lógica de autenticación
    - Frontend: Contiene un formulario de registro (abrir archivo registro.html), y una página de inicio que obtiene los datos del usuario en base al token, si existe.

## Cómo usar

    - Crear una base de datos donde se creará la tabla usuarios
    - En proyecto backend, instalar dependencias con npm install
    - Configurar conexión a base de datos en config/config.json
    - Ejecutar comando npx sequelize-cli db:migrate para correr migración de usuarios
    - Levantar el server con nodemon /bin/www

    - En el frontend, abrir el archivo registro.html para crear un nuevo usuario, e index.html para mostrar datos del usuario registrado. 

El objetivo es recorrer el flujo de autenticación con JWT:
    - El cliente se registra y obtiene un token, que almacena en localStorage
    - Posteriormente, las peticiones realizadas a la API envían el token en el encabezado authotization


## JWT

Estandar para encodear datos, generalmente utilizado para tokens de acceso que contengan información del cliente que va a ser desencodeada por el server.

- Cliente realiza petición (login)
- Si email y password son correctos
    - Server genera el token
    - Devuelve token a cliente
    - Cliente almacena (localStorage, sessionStorage)
    - Para que la API identifique al usuario, tiene que ser enviado el token en cada petición
        - Query params: urlapi.com/users?token=adsadsadsas
        - Header "Authorization" de petición
            Authorization: Bearer + token
    - Verificación
        Server va a recibir petición
        Verifica si se envió el token
        Desencodea ese token

    - req.user = tokenDesencodeado


