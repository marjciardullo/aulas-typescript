import { Person } from './person';

// Write TypeScript code!
let person = new Person('Marjorye', 'Ciardullo', 'Ramirez', 23);

const newPerson: HTMLElement = document.getElementById('personName');
newPerson.innerHTML = person.getFullName();

const newAge: HTMLElement = document.getElementById('personAge');
newAge.innerHTML = person.getBirthdayYear();
