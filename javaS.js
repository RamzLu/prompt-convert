
let opcion;
let history = [];

function convertirArgaDls(arg) {
    arg = parseFloat(arg);
    let dls = arg / 1300;
    return dls;
}

do {
    opcion = prompt("Bienvenido a la calculadora de pesos a dólares!\n1-Convertir (Arg->Dls)\n2-Salir");

    switch (opcion) {
        case "1":
            let arg = prompt("Ingrese la cantidad de pesos que desea convertir.");
            let dls = convertirArgaDls(arg);
            let resultado = {
                tipo: "divisa",
                entrada: `${arg} ARS`,
                salida: `${dls.toFixed(2)} USD`,
                fecha: new Date().toLocaleString(),
            };
            history.push(resultado);
            alert(`La cantidad de dólares es: ${dls.toFixed(2)}`);
            break;
       default:
            if (opcion!=="2")
                alert("Opción invalida. Reintente y eliga una opción válida.");
            break;
    }
} while (opcion !== "2");

console.log("Historial de conversiones:", history);

