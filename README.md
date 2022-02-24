# merqueo-app

### Consideraciones y tecnologías usadas

```
- Aplicación desarrollada en Vue 3.
 - Se hizo uso de Tailwind css, ya que si bien no es una librería de componentes permite crearlos de manera rápida y personalizada,
 además que mantiene el uso y conocimiento activo de lo que en si es CSS. 
 - Para el consumo del endpoint se usó axios, y la data se manejo desde vuex, reduciendo llamados innecesarios y sobrecarga al backend.
 - Tomó cerca de 8 horas realizar la prueba, en sí no es difícil pero toma tiempo por algunos requerimientos y funcionalidades
 que fueron tomando fuerza durante el desarrollo. 
 - Para el manejo del carrito de compras, se usó el localstorage ya que permite mantener los datos así el navegador sea cerrado
 o sea recargado, esto permite persistencia de la data y que el usuario no tenga la necesidad de realizar el proceso nuevamente. 
 - Quedó pendiente la barra de búsqueda y un skeleton que hace la funcionalidad de un loader para las cards del home.
```

### Despliegue
Haz click en [merqueo-app](https://eloquent-fermi-f08441.netlify.app/#/) para obtener una vista previa de la app.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
