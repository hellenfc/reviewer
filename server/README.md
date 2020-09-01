# Servidor

## Descripción

Servidor 
Permite los siguientes llamados
- `Get` - Resolviendo con un 'Hello World'
- `Post` - Recibe un Objeto y hace trigger del evento `new-review` en el canal `review-channel` enviando un arreglo de objetos.
Estructura de objetos 
    {
      "fruit": "MyFruit",
      "location": {
          "latitud": myLatitud,
          "longitud": MyLongitud
          },
      "review": {
          "appearance": "MyReview",
          "color": "MyReview",
          "taste": "MyReview"
          }
    }

## Instalar

`npm install`
Instalación de dependencias

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar:

`npm start`

Ejecuta la aplicación.<br />
Abrir [http://localhost:3001](http://localhost:3001) para verlo en el navegador.

`npm run dev`

Ejecuta la aplicación utilizando nodemon.<br />
Abrir [http://localhost:3001](http://localhost:3001) para verlo en el navegador.
