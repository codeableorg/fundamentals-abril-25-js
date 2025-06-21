let cadena = new String("codeable");
 
console.log(cadena);
console.log(cadena.length);
console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());
// console.log(cadena.[[PrimitiveValue]]);

function FakeString(cadena) {
  this.length = 0;
  this.primitiveValue = cadena;

  for (const letter of cadena) {
    this[this.length] = letter;
    this.length++;
  }
}

FakeString.prototype.charAt = function (position) {
  if (position === undefined || isNaN(position)) position = 0;
  if (position < 0) return ""

  return this[position]
}

FakeString.prototype.substring = function (indexStart, indexEnd) {
  let result = ""

  if (indexEnd === undefined || indexEnd > this.length)  indexEnd = this.length;
  if (indexStart === indexEnd ) return "";

  if (indexStart > indexEnd) {
    let temp = indexStart;
    indexStart = indexEnd;
    indexEnd = temp;
  }

  for (let i = indexStart; i < indexEnd; i++) {
    result += this[i];
  }
  return result;
}

FakeString.prototype.repeat = function (number = 0) {
  if (number === 0 || this.length === 0) return "";

  let result = ""

  for (let i = 0; i < number; i++) {
    result += this.primitiveValue;
  }

  return result;
}

FakeString.prototype.includes = function (searchString, position = 0) {
  // this.primitiveValue = 'codeable' => length === 8
  // searchString = 'able' => length === 4
  // loop desde :
  //   posicion inicial === 0
  // hasta : 
  //   (8 - 4) => 4 => ultimo caracter desde donde hay 4 caracteres hasta el final 
  if (searchString === '') return true
  if (position < 0 || Number.isNaN(position)) position = 0;
  if (position > searchString.length) return false;


  // condition reducida : i <= this.primitiveValue.length - searchString.length
  for (let i = position; i < this.primitiveValue.length ; i++) {
    const subcadena = this.primitiveValue.substring(i, i + searchString.length )
    // console.log(`${subcadena} ${searchString}`)
    if (subcadena === searchString) return true
  }
  return false
}

const fakeCadena = new FakeString('codeable'); // usamos nuestra funcion constructora
console.log(fakeCadena);

console.log('==> Fake String');
console.log(fakeCadena.length);
console.log(fakeCadena.primitiveValue);
console.log(cadena[2]);
console.log(fakeCadena[2]);

console.log('==> char At ');
console.log(cadena.charAt(0));
console.log(fakeCadena.charAt(0));

console.log('==> substring ');
console.log(cadena.substring(0, 4));
console.log(fakeCadena.substring(0, 4));

console.log('==> substring indexEnd vacio');
console.log(cadena.substring(2));
console.log(fakeCadena.substring(2));

console.log('==> substring ');
console.log(cadena.substring(2, 10));
console.log(fakeCadena.substring(2, 10));

console.log('==> substring indexStart === indexEnd');
console.log(cadena.substring(2, 2));
console.log(fakeCadena.substring(2, 2));

console.log('==> substring indexStart > indexEnd ');
console.log(cadena.substring(4, 2));
console.log(fakeCadena.substring(4, 2));

console.log('==> substring indexStart negativo');
console.log(cadena.substring(-2));
console.log(fakeCadena.substring(-2));

console.log('==> slice indexStart negativo');
console.log(cadena.slice(-2));
// console.log(fakeCadena.slice(-2));

console.log('==> repeat ');
console.log(cadena.repeat(4));
console.log(fakeCadena.repeat(4));

console.log('==> includes ');
console.log(cadena);
console.log(cadena.includes('ableZ',0));
console.log(fakeCadena.includes('ableZ',0));

console.log(cadena.includes('',0));
console.log(fakeCadena.includes('',0));

console.log(cadena.includes('able',20));
console.log(fakeCadena.includes('able',20));










