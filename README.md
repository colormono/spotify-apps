# [Cliente] Spotify Ad
Sitio estático que se conecta con la API de Spotify.

__Tecnologías__
* [Node](https://nodejs.org/) - Servidor local
* [React](https://reactjs.org/) - Manejo del DOM
* [Redux](http://redux.js.org/) - Manejo de DATOS
* [Webpack](http://webpack.js.org/) - Compilador


## Puesta en marcha

Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app).


Se puede encontrar toda la documentación [acá](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


### Configuración
* Clonar el repo
* Acceder desde la terminal al directorio
* Instalar dependencias con `npm install`
* [Scripts disponibles](#available-scripts)
  * [npm start](#npm-start) - Correr mientras se desarrolla
  * [npm test](#npm-test)
  * [npm run build](#npm-run-build) - Correr para compilar la versión para distribución
  * [npm run eject](#npm-run-eject)

### Actualizar datos de conexión
Desde `src/config.js` actualizar_
- __ID de Cliente__
- __URL para redirección__
- __scopes__ requeridos

### Base de datos
- No aplica por el momento


## Deployment
- Revisar que los paths de `config.js` estén correctamente apuntados
- Desde `package.json` actualizar __hompage__
- Si se hostea en un servidor Apache, el `.htaccess` es este:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
#CORS
Header set Access-Control-Allow-Origin "*"
Header add Access-Control-Allow-Headers "origin, x-requested-with, content-type"
Header add Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"
```

## Links utiles

### Autentificación & Spotify
* [Guía de Autorización](https://developer.spotify.com/web-api/authorization-guide/#authorization-code-flow)
* [Spotify Endpoints](https://developer.spotify.com/web-api/endpoint-reference/)
* [Librería API JS](https://github.com/jmperez/spotify-web-api-js) __(La que estamos usando)__
* [Librería API JS DOCS](https://doxdox.org/jmperez/spotify-web-api-js)
* [Pop up window to do authentication in](https://github.com/jaredhanson/passport-facebook/issues/188)

### Redux middleware
* [Redux Persist](https://github.com/rt2zz/redux-persist) - Caché de sesión
* [Redux Thunk](https://github.com/gaearon/redux-thunk) - Middleware que permite crear acciones que devuelven funciones en lugar de acciones
* [Redux Logger](https://github.com/evgenyrodionov/redux-logger) - Middleware para generar log en la consola
* [Redux Forms](https://redux-form.com/7.2.0/) - Formularios

### React components
* [React Router](https://reacttraining.com/react-router) - URLs amigables, control de rutas
* [React Player](https://github.com/CookPete/react-player) - Reproductor de video
* [React Share](https://github.com/nygardk/react-share) - Botones de redes
* [React GA](https://github.com/react-ga/react-ga) - Tracking de eventos de Google Analytics

### Animaciones
* [React animations in depth](https://medium.com/react-native-training/react-animations-in-depth-433e2b3f0e8e) - Tutorial con distintas propuestas para animar
* [GSAP Docs](https://greensock.com/docs) - Documentación de Greensock
* [GSAP Enhancer](https://github.com/azazdeaz/react-gsap-enhancer) - Mejorar performance de la librería para animaciones más complejas
* [AnimeJS](https://github.com/hyperfuse/react-anime) - Librería alternativa
* [React Motion](https://github.com/chenglou/react-motion) - Librería para animaciones de interfaces
