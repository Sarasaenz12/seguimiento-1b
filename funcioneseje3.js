// Arrays que representan el estado de los asientos de las dos salas de cine
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

// Función para mostrar la disponibilidad de asientos en ambas salas de cine
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

// Función para reservar un asiento en una de las salas de cine
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}

// Función para verificar la disponibilidad de asientos en una sala y mostrar un mensaje apropiado
function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("¡Disfruta de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

// Bucle para mostrar el menú de opciones y permitir que el usuario interactúe con el sistema
while (true) {
  const opcion = prompt("Bienvenido a la sala de cine\nSelecciona una opción:\n1. Ver disponibilidad de asientos\n2. Reservar asiento\n3. Ver ocupación sala\n4. Salir");

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}