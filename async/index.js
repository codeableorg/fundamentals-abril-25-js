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

function getUser(email, password, callback) { 
  // verificar el contenido de la funcion callback
  // console.log(`estoy esperando un callback: ${callback}`)

  setTimeout(() => {
    const user = users.find((u) => u.email === email);
    if (!user || user.password !== password) {
      const error = new Error("Credenciales invalidas");
      callback(error)  // ejecuta la funcion callback con el error encontrado
      return;
    }
  
    callback(null, user); // ejecuta la funcion callback con el valor del usuario que has encontrado
  }, 2000);
}


const passwordPepeCorrecto = "supersecret"
const passwordPepeIncorrecto = "manzana"
const correoAna = "ana@mail.com"
const passwordAna =  "letmein"
 
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

function getPublicRepos(username, callback) {
  
  // Simulamos que la ejecucion de la funcion demora 2 segundos
  setTimeout(function() {

    // Simulamos un posible error de conexión con Github
    const hasConnectionError = Math.random() > 0.5;
    if (hasConnectionError) {
      callback(new Error("Error de conexión"))
      return;
    }
  
    const repos = githubPublicRepos.filter((repo) => repo.owner === username);
  
    callback(null, repos);
  }
    , 2000)

}

// ejecutando la funcion getPublicRepos
// hello-world
// say-hi
