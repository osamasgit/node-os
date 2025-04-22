const getSystemInfo = require('./osModule.js');
const getInterfacesInfo = require('./networkModule.js');

const systemInfo = getSystemInfo();
const interfacesInfo = getInterfacesInfo();

const { nombre, tipo, version, arquitectura, cpus, totalMemoria, memoriaLibre } = systemInfo;

console.log(`INFORMACION DEL SISTEMA:
    
Nombre: ${nombre}
Tipo: ${tipo}
Version: ${version}
Arquitectura: ${arquitectura}
CPUs: ${cpus.length}
Total Memoria: ${totalMemoria} MB
Memoria Libre: ${memoriaLibre} MB
`);
console.log('INFORMACION DE LA INTERFAZ:');
interfacesInfo.forEach((info) => {
console.log(`
Interfaz: ${info.nombreInterfaz}
    Familia: ${info.family} 
    Direccion: ${info.address}
    Interna: ${info.internal}
    `);
});