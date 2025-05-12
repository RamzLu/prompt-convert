
let opcion;
let history = [];

function convertCurrency(pesos) {
    pesos = parseFloat(pesos);
    let dls = pesos / 1300;
    return dls;
}

do {
    opcion = prompt("Bienvenido a la calculadora de pesos a dólares!\n1-Divisa (Arg->Dls)\n2-Salir");

    switch (opcion) {
        case "1":
            let pesos = prompt("Ingrese la cantidad de pesos que desea convertir.");
            let dls = convertCurrency(pesos);
            let resultado = {
                tipo: "divisa",
                entrada: `${pesos} ARS`,
                salida: `${dls.toFixed(2)} USD`,
                fecha: new Date().toLocaleString(),
            };
            history.push(resultado);
            alert(`La cantidad de dólares es: $${dls.toFixed(2)}`);
            break;
       default:
            if (opcion!=="2")
                alert("Opción invalida. Reintente y eliga una opción válida.");
            break;
    }
} while (opcion !== "2");

console.log("Historial de conversiones:", history);

