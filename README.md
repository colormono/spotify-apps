# [Cliente] Spotify Ad
Sitio estático que se conecta con la API de Spotify.

Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app).

Se puede encontrar toda la documentación [acá](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

__Tecnologías__
* [Node](https://nodejs.org/) - Servidor local
* [React](https://reactjs.org/) - Control del DOM
* [Redux](http://redux.js.org/) - Control de DATOS
* [Webpack](http://webpack.js.org/) - Compilador


## Puesta en marcha
* Clonar el repo
* Acceder desde la terminal al directorio
* Instalar dependencias con `npm install`
* Correr [script disponibles](#available-scripts)
  * [npm start](#npm-start) - Comenzar a desarrollar
  * [npm test](#npm-test) - Correr tests
  * [npm run build-sandbox](#npm-run-build) - Crear distribución para sandbox
  * [npm run build](#npm-run-build) - Crear distribución para productivo


### Configuración
- Ajustar las URLs y datos de la apliación de Spotify en `config.js`
- En `package.json` ajustar la variable __PUBLIC_URL__ de la tarea __build-sandbox__ con la ruta de sandbox.


### Base de datos
- No aplica por el momento


## Deployment
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

## Links útiles

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
* [Redux Reselect](https://github.com/reactjs/reselect) - Librería para agrupar selecciones para Redux


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
