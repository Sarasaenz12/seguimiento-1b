const denominations = [50000, 20000, 10000, 5000, 2000, 1000];

// Función para obtener la cantidad de dinero que el usuario desea retirar.
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar?");
  return parseFloat(userInput); // Convierte la entrada del usuario en un número decimal.
}

// Función para calcular la cantidad de billetes necesarios para el retiro.
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => { // Mapea sobre cada denominación de billete.
    const billetsNeeded = Math.floor(amount / denomination); // Calcula la cantidad de billetes necesarios para la denominación actual.
    amount -= billetsNeeded * denomination; // Actualiza el monto restando el valor de los billetes necesarios.
    return billetsNeeded; // Devuelve la cantidad de billetes necesarios para la denominación actual.
  });
}

// Función para verificar si el monto de retiro es válido.
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0; // Retorna verdadero si el monto es positivo y es un número entero.
}

// Función que realiza la transacción en el cajero automático.
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount(); // Obtiene el monto de retiro ingresado por el usuario.

  if (!isValidWithdrawalAmount(withdrawalAmount)) { // Verifica si el monto de retiro es válido.
    alert("El monto solicitado no es válido."); // Muestra un mensaje de alerta si el monto no es válido.
    return; // Termina la función.
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount); // Calcula la cantidad de billetes necesarios para el retiro.

  alert("Para retirar $" + withdrawalAmount + ", necesitas:"); // Muestra un mensaje con el monto de retiro.

  denominations.forEach((denomination, index) => { // Itera sobre cada denominación de billete.
    if (billetsNeeded[index] > 0) { // Verifica si se necesitan billetes para la denominación actual.
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination); // Muestra la cantidad de billetes necesarios para la denominación actual.
    }
  });
}

ATMTransaction(); // Llama a la función principal para realizar la transacción en el cajero automático.