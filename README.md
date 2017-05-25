# LEAVE ANDES PROYECTO REACT
El proyecto se generó utilizando la herramienta [create-react-app](https://github.com/facebookincubator/create-react-app/). 

### ¿Por qué usar create-react-app?
Tiene una filosofía de *one build dependency*, internamente maneja Webpack, Babel, ESLint, ES6, Jest. El ambiente tiene todo lo necesario para construir aplicaciones React modernas sin configuraciones adicionales ni manejo de depenencias entre paquetes. Brinda la posibilidad de personalizar en cualquier momento la configuracion de la aplicación y extraer todas las depenendencias internas de create-react-app al package.json. Adicionalmente se añadió referencia a Bootstrap, soporte para SASS y Enzyme.

No es necesario instalar o configurar herramientas como Webpack o Babel. Ya están preconfiguradas y ocultas de manera que se pueda enfocar solamente en el código.

### Estructura de la aplicación
```sh
my-app/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    favicon.ico
    index.html
    manifest.json
  src/
    components/
      app/
        app.js
        app.scss
        app.test.js
      ...
    images/
    styles/
      index.scss
      shared.scss
      ...
    index.js
    registerServiceWorker.js
```
Los componentes se encuentran en el directorio *components*. Cada componente debe tener su hoja de estilos y su fichero de pruebas. Se debe usar la siguiente convención:

- nombre_componente.js
- nombre_componente.scss
- nombre_componente.test.js


## Instalación
Una vez descargado el proyecto ejecutar el siguiente comando.
```sh
$ cd leave-ui/
$ npm install
```

## Ejecución del proyecto
Para levantar el proyecto ejecutar el siguiente comando. Luego abrir [http://localhost:3000/](http://localhost:3000/) para ver la aplicación.
```sh
$ npm start
```

## Ejecución de pruebas
Para la ejecución de pruebas se está utilizando Jest y Enzyme. Por convención los ficheros de pruebas deben tener la estructura *name.test.js* o *name.spec.js* y pueden estar ubicados en cualquier profundidad dentro de la carpeta src. Internamente se trabajará colocando los ficheros de prueba dentro de los directorios de cada compononte de manera tal que cada componente tenga su propio fichero de pruebas.

Para la ejecución de las pruebas, ejecutar el siguiente comando
```sh
$ npm test
```
