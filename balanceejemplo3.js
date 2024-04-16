const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

const costoBoleta = 10; // Costo de cada boleta

function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

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

function verBalance() {
  const totalRecaudadoSala1 = sala1.filter(asiento => asiento).length * costoBoleta;
  const totalRecaudadoSala2 = sala2.filter(asiento => asiento).length * costoBoleta;
  const totalRecaudadoGeneral = totalRecaudadoSala1 + totalRecaudadoSala2;

  alert(`Dinero recaudado en la Sala 1: $${totalRecaudadoSala1}`);
  alert(`Dinero recaudado en la Sala 2: $${totalRecaudadoSala2}`);
  alert(`Dinero recaudado total: $${totalRecaudadoGeneral}`);
}

while (true) {
  const opcion = prompt("Bienvenido a la sala de cine\nSelecciona una opción:\n1. Ver disponibilidad de asientos\n2. Reservar asiento\n3. Ver ocupación sala\n4. Ver balance\n5. Salir");

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
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}