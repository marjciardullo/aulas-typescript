export class Person {
  primeiroNome: string;
  segundoNome: string;
  ultimoNome: string;
  idade: number;

  constructor(
    primeiroNome: string,
    segundoNome: string,
    ultimoNome: string,
    idade: number
  ) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
  }

  getFullName() {
    return `Oi! Sou a ${this.primeiroNome} ${this.segundoNome} ${this.ultimoNome}`;
  }

  getBirthdayYear() {
    return ` tenho ${this.idade} anos`;
  }
}
