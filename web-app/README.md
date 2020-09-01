# Web app - Formulario

## Descripción

Formulario sobre reseña de frutas. 
Consta de 3 pasos:

- `Selector de frutas` - Muestra las diferentes opciones disponibles para hacer una reseña.
- `Escala Likert` - Muestra un cuestionario con diferentes propiedades del objeto
- `Mapa` - Muestra un donde se puede seleccionar el lugar de la fruta que está siendo evaluada.

Al haber seleccionado cada uno de estos pasos es posible hacer Submit de estos valor por medio de pusher hacia una aplicación Móvil.

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

![picture](../screenshots/web.png)

## Instalar

`npm install`
Instalación de dependencias

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar:

`npm start`

Ejecuta la aplicación en modo de desarrollo. <br />
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones. <br />
También verá cualquier error de linting en la consola.

`npm test`

Inicia el corredor de pruebas en el modo de watch mode.

`npm run build`

Construye la aplicación para producción en la carpeta `build`. <br />
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash. <br />

`npm run eject`

**Nota: esta es una operación unidireccional. Una vez que "expulsas", ¡no puedes regresar!**

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (paquete web, Babel, ESLint, etc.) directamente en su proyecto para que tenga control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto estás solo.

No es necesario que utilice nunca "eject". El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a utilizar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para usarla.