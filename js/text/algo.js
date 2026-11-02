/** @format */

function carre() {
  let nombre = prompt('Merci de saisir un nombre');

  if (nombre !== null) {
    let resultatCalcul = Math.pow(Number(nombre), 2);

    console.log(resultatCalcul);

    document.getElementById('resultatcarre').textContent =
      'Le carré de ' + nombre + ' est : ' + resultatCalcul;
  }
}

function somme() {
  while (nombre1 === null || nombre2 === null) {
    let nombre1 = parseInt(prompt('Saisir le premier nombre'));
    let nombre2 = parseInt(prompt('Saisir le deuxième nombre'));
  }
  let resultatCalcul = nombre1 + nombre2;

  document.getElementById('resultatsomme').textContent =
    'La somme de ' + nombre1 + ' + ' + nombre2 + ' est : ' + resultatCalcul;
}

function allPair() {
  let nombre = parseInt(prompt('Saisir un nombre'));
  let i = 2;
  let array = [];
  while (i <= nombre) {
    array.push(i);
    i += 2;
  }
  document.getElementById('resultatallPair').textContent = array;
}

function allPrimes() {
  const primes = [];
  let nombre = Number(prompt('Saisir un nombre'));
  for (let i = 2; i <= nombre; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }

  document.getElementById('resultatallPrimes').textContent = primes;
}
function tableMulti() {
  let nombre = Number(prompt('Saisir un nombre'));
  let resultArray = [];

  for (let i = 0; i <= 10; i++) {
    resultArray.push(i * nombre);
  }
  document.getElementById('resultattableMulti ').textContent = resultArray;
}

function factoriel() {
  let nombre = Number(prompt('Saisir un nombre'));

  if (nombre < 0) {
    document.getElementById('resultatfactoriel').textContent =
      "La factorielle n'existe pas pour les nombres négatifs.";
  } else if (nombre === 0 || nombre === 1) {
    document.getElementById('resultatfactoriel').textContent = 1;
  } else {
    let resultat = 1;
    for (let i = 1; i <= nombre; i++) {
      resultat *= i;
    }

    document.getElementById('resultatfactoriel').textContent =
      'Factoriel de ' + nombre + ' est ' + resultat;
  }
}

function inverse() {
  let nombre = Number(prompt('Saisir un nombre'));
  if (nombre == 0) {
    document.getElementById('resultatInvers').textContent =
      "l'inverse de 0 n'existe pas";
  } else {
    let result = 1 / nombre;
    document.getElementById('resultatInvers').textContent =
      "l'inverse de " + nombre + ' est ' + result;
  }
}

function plusGrandDiv() {
  let nombre = Number(prompt('Saisir un nombre'));
  document.getElementById('resultatplusGrand').textContent =
    'Son plus grand diviseur est ' + nombre;
}

function plusPetitDiv() {
  let nombre = Number(prompt('Saisir un nombre'));
  document.getElementById('resultatplusPetit').textContent =
    'Le plus petit diviseur de ' + nombre;
}
