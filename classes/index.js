class Hechicero {
  constructor (nombre, casa) {
    this.nombre = nombre;
    this.casa = casa;
  }
  casting (hechizo) {
    console.log(`${this.nombre} lanza el hechizo: ${hechizo}!`);
  }
}

class Alumno extends Hechicero {
  constructor (nombre, casa, año) {
    super(nombre, casa);
    this.año = año;
  } 
  estudiar (materia) {
    console.log(`${this.nombre} está estudiando ${materia} en su ${this.año}° año en Hogwarts.`);
  }
}

class Profesor extends Hechicero {
  constructor (nombre, casa, materia , añosExperiencia) {
    super (nombre, casa);
    this.materia = materia;
    this.añosExperiencia = añosExperiencia;
  }
 enseñar()  {
  console.log(`El profesor ${this.nombre} de la casa ${this.casa} enseña ${this.materia}`);
 }
}
 

const harry = new Alumno('Harry Potter', 'Gryffindor', 2);
harry.estudiar('volar');
harry.casting('super hechizo');
const snape = new Profesor('Snape', 'Gryffindor', 'hechizos', 10);
snape.enseñar();
snape.casting('super hechizo');