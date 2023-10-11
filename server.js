let listaContactos = [];

function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

function borrarContacto(id) {
  const indice = listaContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

function actualizarContacto(id, nuevaInformacion) {
  const contactoIndex = listaContactos.findIndex((contacto) => contacto.id === id);
  if (contactoIndex !== -1) {
    listaContactos[contactoIndex] = { ...listaContactos[contactoIndex], ...nuevaInformacion };
    console.log("Contacto actualizado exitosamente.");
  } else {
    console.log("No se encontró ningún contacto con el ID proporcionado.");
  }
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto) => {
    console.log("ID: " + contacto.id);
    console.log("Nombres: " + contacto.nombres);
    console.log("Apellidos: " + contacto.apellidos);
    console.log("Teléfono: " + contacto.telefono);
    console.log("Ubicaciones:");
    console.log(" - Ciudad: " + contacto.ubicaciones.ciudad);
    console.log(" - Dirección: " + contacto.ubicaciones.direccion);
    console.log("-------------------");
  });
}

imprimirContactos(); 

const contacto1 = {
  id: 1,
  nombres: "Crisma",
  apellidos: "Reyes",
  telefono: "95659867",
  ubicaciones: {
    ciudad: "Tegucigalpa",
    direccion: "Barrio Casamata",
  },
};

agregarContacto(contacto1); 
imprimirContactos(); 

const nuevaInformacionContacto1 = {
  telefono: "96584734",
  ubicaciones: {
    direccion: "Barrio La Guadalupe",
  },
};

actualizarContacto(1, nuevaInformacionContacto1); 
imprimirContactos(); 

borrarContacto(1); 
imprimirContactos(); 
