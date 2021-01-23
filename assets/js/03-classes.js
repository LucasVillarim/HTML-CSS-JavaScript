// class MyClass {
//   constructor() {
//     metodo01() {

//     }

//     metodo02() {

//     }
//   }
// }

// const myConst = class MyClass{};

// // ou

// const MyConst2 = class {}

// // ou

// function MakeClass () {
//   return class{}
// }

// class Dog{}

// const Belinha = new Dog();

// class Dog {
//   constructor( name ) {
//     this._name = name;
//   }
// }

// const Pet = new Dog('Belinha');

// console.log(Pet._name);

// nomeDoMetodo() {
//   return
// }

// get nomeDoMetodo( name ) {
//   return this.name 
// }

// set nomeDoMetodo( name ) {
//   this.name
// }

// static nomeDoMetodo( name ) {
//   return this._name
// }

// class MyClass{
//   constructor(name) {
//   }
//   static Valor(name) {
//     this.name;
//   }
// }

// let Teste = new MyClass();

// console.log(MyClass.Valor('Lucas'));

// class Animal {
//   constructor(name) {
//     this._name = name
//   }

//   speakTest(){
//     return console.log(`${this._name} faz barulho`);
//   }

//   speak() {
//     console.log(`${this._name} faz barulho`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this._name} late`);
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log(`${this._name} mia`);
//   }
// }

// const myDog = new Dog('Cacau');
// const myCat = new Cat('Tom');

// myDog.speak();
// myCat.speak();


class Phrase {
  constructor (name, birth, profission) {
    this.name = name;
    this.nascimento = birth;
    this.profissao = profission;
  }

  generate() {
    this.idade = 2021 - this.nascimento.split('/').slice(-1)[0];
    return console.log(`Olá meu nome é ${this.name} e tenho ${this.idade}.`);
  }
};


const result = new Phrase('Lucas', '02/05/1994');
result.generate();


