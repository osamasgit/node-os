const os = require('node:os');

const interfaces = os.networkInterfaces();

function getInterfacesInfo() {
    const interfacesInfo = [];
    for (const nombreInterfaz in interfaces) {
        const direcciones = interfaces[nombreInterfaz];
      
        direcciones.forEach((direccion) => {
            interfacesInfo.push({
                nombreInterfaz: nombreInterfaz,
                family: direccion.family,
                address: direccion.address,
                internal: direccion.internal
            });
        });
    }
    return interfacesInfo;
}

module.exports = getInterfacesInfo;