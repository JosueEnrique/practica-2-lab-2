// Crear un objeto Date
const fechaActual = new Date();

// Obtener el día actual (1-31)
const diaActual = fechaActual.getDate();

// Obtener el mes actual (0-11), donde 0 es enero y 11 es diciembre
const mesActual = fechaActual.getMonth() + 1; // Sumar 1 para obtener el mes en formato 1-12

// Obtener el año actual
const anioActual = fechaActual.getFullYear();

// Mostrar la fecha actual
console.log(`La fecha actual es: ${diaActual}/${mesActual}/${anioActual}`);