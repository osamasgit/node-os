const os = require('node:os');

const nombre = os.hostname();
const tipo = os.type();
const version = os.release();
const arquitectura = os.arch();
const cpus = os.cpus();
let totalMemoria = os.totalmem();// Memoria total (en bytes)
let memoriaLibre = os.freemem();// Memoria libre (en bytes)

const toMB = (bytes) => {
    return (bytes / 1024 / 1024).toFixed(2); // Convertir a MB
}

totalMemoria = toMB(totalMemoria)
memoriaLibre = toMB(memoriaLibre)

function getSystemInfo() {
    const osInfo = {
        nombre: nombre,
        tipo: tipo,
        version: version,
        arquitectura: arquitectura,
        cpus: cpus,
        totalMemoria: totalMemoria,
        memoriaLibre: memoriaLibre
    }
    return osInfo;
}

module.exports = getSystemInfo;