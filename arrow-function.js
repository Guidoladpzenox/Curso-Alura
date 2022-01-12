function apresentar(nome) {
return `Meu nome é ${nome}`;
}

// Arrow function ?: deixa o cóigo menor; não pode ser nomeada;sempre vem com uma const e o nome da variável
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow com + de 1 linha de instrução

const numPequenos = (num1,  num2) => {
    if  (num1 || num2 >10  ) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting : Arrow function se comporta como expressão