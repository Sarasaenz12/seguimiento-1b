const denominations = [50000, 20000, 10000, 5000, 2000, 1000];

// Función para obtener la cantidad de dinero que el usuario desea retirar.
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar?");
  return parseFloat(userInput); 
}

// Función para calcular la cantidad de billetes necesarios para el retiro.
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => { // Mapea sobre cada denominación de billete.
    const billetsNeeded = Math.floor(amount / denomination); 
    amount -= billetsNeeded * denomination;
    return billetsNeeded; 
  });
}

// Función para verificar si el monto de retiro es válido.
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

// Función que realiza la transacción en el cajero automático.
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) { 
    alert("El monto solicitado no es válido.");
    return; // Termina la función.
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount); // Calcula la cantidad de billetes necesarios para el retiro.

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");

  denominations.forEach((denomination, index) => { // Itera sobre cada denominación de billete.
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}

ATMTransaction(); // Llama a la función principal para realizar la transacción en el cajero automático.
