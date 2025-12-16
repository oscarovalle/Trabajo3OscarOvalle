GESTIÓN DE EQUIPOS – APLICACIÓN MÓVIL
-----------------------------------

DESCRIPCIÓN GENERAL

El presente proyecto corresponde al desarrollo de una aplicación móvil realizada con Ionic y Angular, cuyo objetivo es gestionar equipos utilizados en faena, permitiendo visualizar información relevante de cada equipo y registrar reportes asociados a su estado y mantenimiento. La aplicación simula un entorno real de trabajo, considerando navegación entre faenas, equipos y reportes, manteniendo siempre el contexto del equipo seleccionado.

El sistema permite ingresar nuevos reportes, revisar reportes anteriores y visualizar información detallada de cada equipo, todo bajo una interfaz simple y coherente, preparada para una futura integración con una base de datos real.


ENFOQUE DE DESARROLLO

El desarrollo de la aplicación se abordó de manera incremental, comenzando por la definición de la estructura de navegación y las páginas principales. Posteriormente, se incorporaron las vistas de detalle y los formularios necesarios para el ingreso de reportes.

Se utilizó Angular en modalidad standalone, lo que permitió una organización clara del código, separando la lógica de negocio de la presentación visual. Los datos utilizados actualmente corresponden a datos simulados (mock), lo que permite que la aplicación funcione completamente sin depender de un backend.

Durante el desarrollo se priorizó mantener una experiencia de usuario clara, con estilos consistentes, fondo blanco, botones identificables y navegación intuitiva entre las distintas pantallas.


PROBLEMAS ENFRENTADOS

Uno de los principales problemas enfrentados fue la pérdida de contexto al navegar entre páginas, especialmente al retornar desde la vista de un reporte hacia el detalle del equipo. Este problema se resolvió mediante el uso de rutas dinámicas, pasando los identificadores necesarios entre las distintas vistas.

Otro inconveniente fue la correcta integración de los componentes de Ionic en Angular standalone, lo que requirió importar explícitamente IonicModule en cada página para asegurar el correcto funcionamiento de los componentes visuales.

También se presentaron desafíos en la confirmación de acciones del usuario, como el envío de reportes. Esto se solucionó utilizando los controladores de alertas de Ionic, permitiendo confirmar acciones y mostrar mensajes de éxito de forma clara.


INSTALACIÓN DEL PROYECTO

Requisitos previos:
- Node.js (versión LTS)
- Ionic CLI

Para instalar Ionic CLI:
npm install -g @ionic/cli

Una vez descargado o clonado el proyecto, se debe acceder a la carpeta raíz y ejecutar:
npm install

Esto instalará todas las dependencias necesarias para el funcionamiento del proyecto.


EJECUCIÓN DE LA APLICACIÓN

Para ejecutar la aplicación en modo desarrollo se debe utilizar el siguiente comando:
ionic serve

La aplicación se abrirá automáticamente en el navegador. No es necesario instalar ningún software adicional fuera de lo indicado en este archivo.


CONSIDERACIONES FINALES

El proyecto queda preparado para futuras mejoras, tales como la integración con una base de datos real, captura de imágenes desde la cámara del dispositivo, autenticación de usuarios y generación de reportes más avanzados.

El código entregado puede instalarse y ejecutarse correctamente siguiendo únicamente los pasos descritos en este documento.
