let pessoa = {
  nome: 'Ana',
  idade: 22,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 100
  }
}

const { nome, idade } = pessoa;
console.log(nome);

const { nome: n, idade: i } = pessoa;
console.log(n, i)

const { endereco: { logradouro, numero} } = pessoa;
console.log(logradouro, numero);