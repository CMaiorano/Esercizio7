const users = [
  { id: 1, name: 'Fabio', surname: 'Biondi', age: 15 },
  { id: 2, name: 'Mario', surname: 'Rossi', age: 26 },
  { id: 3, name: 'Lorenzo', surname: 'Verdi', age: 12 },
  { id: 4, name: 'Silvia', surname: 'Bianchi', age: 36 },
];

/**
 * ESERCIZIO
 *
 * 1. utilizza il metodo 'find' per iterare sull'array
 * 2. trova l'utente con l'id specificato nella costante ID, definita qui sotto
 * 3. visualizza il nome dell'utente con ID = 2, quindi 'Mario'
 */

const ID = 2;

// const user = ...                     // <== MODIFICA QUESTA LINEA

// OUTPUT 'Mario'. Acquisito dall'oggetto 'user'
const user = users.find(item => item.id === 2)
export const output = `${user.name}`; // <== MODIFICA QUESTA LINEA

console.log(users)
console.log(user)
console.log(output);
document.querySelector('#output').innerHTML = output;
