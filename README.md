# [Cliente] Spotify Ad

## Resumen
Sitio estático que se conecta con la API de Spotify.

- [Documentación oficial](https://developer.spotify.com/web-api/endpoint-reference/)
- [Guía de Autorización](https://developer.spotify.com/web-api/authorization-guide/#authorization-code-flow)
- [Spotify Web API JS](https://github.com/jmperez/spotify-web-api-js) __(La que estamos usando)__
- [Spotify Web API JS DOCS](https://doxdox.org/jmperez/spotify-web-api-js)
- Alternativa para [PHP](https://github.com/jwilsson/spotify-web-api-php)

#### Datos de conexión a Spotify
Desde `src/reducers/reducer_login.js` se puede actualizar el __ID de Cliente__, la __URL para redirección__ y los __scopes__ requeridos por la App.


## Puesta en marcha

#### Herramientas
* [Node](https://nodejs.org/) - Servidor local
* [React](https://reactjs.org/) - Manejo del DOM
* [Redux](http://redux.js.org/) - Manejo de DATOS
* [Webpack](http://webpack.js.org/) - Compilador
* [Bootstrap](https://getbootstrap.com/) - Estilos básicos
* [Redux Persist](https://github.com/rt2zz/redux-persist) - Caché de sesión
* [React Player](https://github.com/CookPete/react-player) - Reproductor de video

Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app)
.<br>
Se puede encontrar toda la documentación [acá](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


#### Configuración
* Clonar el repo
* Acceder desde la terminal al directorio
* Instalar dependencias con `npm install`
* [Scripts disponibles](#available-scripts)
  * [npm start](#npm-start) - Correr mientras se desarrolla
  * [npm test](#npm-test)
  * [npm run build](#npm-run-build) - Correr para compilar la versión para distribución
  * [npm run eject](#npm-run-eject)


#### Dependencias
Este proyecto usa dependencias de [Node](https://nodejs.org/).
Para instalarlas ejecutar en la terminal:
```
~ npm install
```


##### Actualizar dependencias

**(Sólo si no corre watch)** Instalar npm-check-updates de forma global, correrlo dentro de la cartpeta donde está package.json y actualizar versiones de las dependencias. Luego borrar la carpeta de los modulos de node y reinstalar.

```
~ npm install -g npm-check-updates
~ npm-check-updates -u
~ rm -fr node_modules
~ npm install
```


#### Base de datos
La estructura de la base de datos se encuentra en el directorio /db


#### Deployment
-

## Enlaces relevantes
* Proyecto en Basecamp:
* Proyecto en Trello/Jira:


## Personas involucradas
* Project manager: 
* Responsable de la cuenta: 
* Responsable del desarrollo: Mariano Rivas
* Responsable del diseño: 
* Otras personas involucradas: 


### Tips
* Redux maneja los datos de la app
* Los "components" sólo renderizan info
* Los "containers" renderizan info pero __hablan__ con Redux
* 

### Links utiles
- [Pop up window to do authentication in](https://github.com/jaredhanson/passport-facebook/issues/188)