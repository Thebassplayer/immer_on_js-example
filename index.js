import produce from 'immer';

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj1 = {
  firstName: 'Romina',
  lastName: 'Quiroga',
  parents: {
    mother: 'Estela',
    father: 'Sergio',
  },
};

const obj2 = produce(obj1, (draft) => {
  draft.parents.mother = 'Ester';
  draft.parents.father = 'Sergio';
});

console.log(obj1);
