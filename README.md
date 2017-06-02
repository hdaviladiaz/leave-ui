# LEAVE EC UI
The project was generated using [create-react-app](https://github.com/facebookincubator/create-react-app/). 

### ¿Why use create-react-app?
The create-react-app has *one build dependency* phylosofy, inside the package manage Webpack, Babel, ESLint, ES6, Jest. The enverionment has everything to build modern React app without aditional configuration and crossover dependencies. Gives the posibility of customize anymoment the app configuration in the *package.json*. We added Bootstrap, SASS and Enzyme dependencies. It's not needed set-up or config those dependencies, all of them are pre-config

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

## Install
Once the code is cloned, Run the following command
```sh
$ cd leave-ui/
$ npm install
```

## Run the project
In order to run the project, Run the following command. Then [http://localhost:3000/](http://localhost:3000/) para ver la aplicación.
```sh
$ npm start
```

## Execute the test
Para la ejecución de pruebas se está utilizando Jest y Enzyme. Por convención los ficheros de pruebas deben tener la estructura *name.test.js* o *name.spec.js* y pueden estar ubicados en cualquier profundidad dentro de la carpeta src. Internamente se trabajará colocando los ficheros de prueba dentro de los directorios de cada compononte de manera tal que cada componente tenga su propio fichero de pruebas.

The test are made with Jest and Enzyme. The convection the files has to be named as *name.test.js* o *name.spec.js* and can be located any deepth in *src* folder. We work with a test file in the same component's directory, therefore each component could have his own test file.

In order to run the tests, Run rhe following command
```sh
$ npm test
```
