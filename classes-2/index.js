/*
tarea 1
Tomando como referencia la aplicacion AirBnB
vamos a crear una clase Usuario con propiedades nombre y email
luego vamos a crear una clase Anfitrion que hereda de Usuario con propiedades "propiedades"
y tambien un clase Huesped con propiedades reservas

tarea 2
crear metodo 'agregarPropiedad' en Anfitrion
crear metodo 'mostrarPropiedades' en Anfitrion

tarea 3
crear metodo 'hospedar' en Huesped
*/

class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Anfitrion extends Usuario {
  constructor(nombre, email, propiedades) {
    // ["departamento en Miraflores 510", "casa en San Isidro 100"]
    super(nombre, email);
    this.propiedades = propiedades;
  }
  agregarPropiedad(propiedad) {
    this.propiedades.push(propiedad);
  }
  mostrarPropiedades() {
    console.log(
      `soy ${this.nombre} , tengo ${this.propiedades.length} propiedades y son: ${this.propiedades}`
    );
  }
}

class Huesped extends Usuario {
  constructor(nombre, email, reservas) {
    // ["reserva en Miraflores para 10 Junio "]
    super(nombre, email);
    this.reservas = reservas;
  }
  hospedarse(propiedad) {
    console.log(`soy ${this.nombre} y estoy hospedado en ${propiedad}`);
  }
}

const anfitrion1 = new Anfitrion("Jaime", "jaime@mail.com", []);
anfitrion1.agregarPropiedad("departamento en miraflores");
anfitrion1.agregarPropiedad("casa en Lince");
anfitrion1.agregarPropiedad("casa en Santa Catalina");
anfitrion1.mostrarPropiedades();

const huesped1 = new Huesped("Juliana", "juli@mail.com", []);
huesped1.hospedarse("casa centro de lima");

// Uber
class Conductor extends Usuario {
  constructor(nombre, email, vehiculo) {
    super(nombre, email);
    this.vehiculo = vehiculo;
  }
  mostrarVehiculo() {
    console.log(`Soy ${this.nombre} y tengo un vehiculo ${this.vehiculo}`);
  }
}

class Pasajero extends Usuario {
  constructor(nombre, email, viajes = []) {
    super(nombre, email);
    this.viajes = viajes;
  }
  mostrarInformacion() {
    const precioTotalViajes = this.viajes.reduce(
      (total, viaje) => total + viaje.precio,
      0
    );
    console.log(
      `Soy ${this.nombre} y realice ${this.viajes.length} viajes que me costaron en total ${precioTotalViajes} soles`
    );
  }
  iniciarViaje(origen, destino, precio) {
    const viaje = { // identificador
      origen: origen,
      destino: destino,
      precio: precio,
    };
    console.log(
      `soy ${this.nombre} y estoy empezando un viaje desde ${viaje.origen} hasta ${viaje.destino}`
    );
    this.viajes.push(viaje);
  }
}

const conductor1 = new Conductor(
  "Ruben",
  "ruben@mail.com",
  "toyota yaris 2020"
);
conductor1.mostrarVehiculo();
const pasajero1 = new Pasajero("Tomas", "tomas@mail.com");
pasajero1.iniciarViaje("mi casa en av las flores 123", "estadio nacional", 30);
pasajero1.iniciarViaje("mi casa en av las flores 123", "aeropuerto", 100);
pasajero1.iniciarViaje("estadio nacional", "mi casa en av las flores", 35);
pasajero1.mostrarInformacion();
