const users = [
  {
    email: "pepe@mail.com",
    password: "supersecret",
    name: "Pepe",
    githubUsername: "pepe-20",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
];

/*
la funcion getUser recibe 3 parametros : 
  1. string que representa el email de un usuario
  2. string que representa el password de un usuario
  3. funcion que usemos para manejar errores o mostrar en consola un mensaje de bienvenida al usuario encontrado

*/

function getUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.email === email);
      if (!user || user.password !== password) {
        const error = new Error("Credenciales invalidas");
        reject(error); // ejecuta la funcion callback con el error encontrado
        return;
      }

      resolve(user); // ejecuta la funcion callback con el valor del usuario que has encontrado
    }, 2000);
  });
}

const passwordPepeCorrecto = "supersecret";
const passwordPepeIncorrecto = "manzana";
const correoAna = "ana@mail.com";
const passwordAna = "letmein";

const promesa = getUser(correoAna, passwordAna);

promesa
  .then((user) => console.log("¡Bienvenid@ " + user.name + "!"))
  .catch((error) => console.error(`Se encontro un error: ${error.message}`));

/*
getUser(correoAna,passwordAna , (error, user) => {
    if (error)  {
      console.error(`Se encontro un error: ${error.message}`);
      return;
    }
    console.log("¡Bienvenid@ " + user.name + "!")

    getPublicRepos(user.githubUsername, function (error, repos) {
      if (error) {
        console.error(error.message)
        return;
      }
      repos.forEach(repo => console.log(repo.name));
    } );


  }
);

*/

/*
====================> funcion getRepos
*/
const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

function getPublicRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // Simulamos un posible error de conexión con Github
      const hasConnectionError = Math.random() > 0.9;
      if (hasConnectionError) {
        reject(new Error("Error de conexión"));
      }

      const repos = githubPublicRepos.filter((repo) => repo.owner === username);
      console.log("estoy en getPublicRepos");
      console.log(repos);

      resolve(repos);
    }, 2000);
  });
  // Simulamos que la ejecucion de la funcion demora 2 segundos
}

// ejecutando la funcion getPublicRepos
// hello-world
// say-hi
const otraPromesa = getPublicRepos("anita-dev");

otraPromesa
  .then((repos) => repos.forEach((repo) => console.log(repo.name)))
  .catch((error) => console.log(error.message));
