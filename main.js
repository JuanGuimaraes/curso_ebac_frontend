function Pessoa(nome) {
    this.nome = nome;
}

function Funcionario(nome, idade, nacionalidade, empresa, cargo, salario ) {
    Pessoa.call(this, nome);
    this.idade = idade;
    this.nacionalidade = nacionalidade;
    this.empresa = empresa;
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;

        _salario = novoSalario;
    }


}

function Atribuicoes (nome, horaTrabalho, funcoes) {
    Pessoa.call(this, nome);
    this.horaTrabalho = horaTrabalho;
    this.funcoes = funcoes;
}

const pessoa = new Pessoa("Marcos", "35", "Brasileiro");
const funcionario = new Funcionario("Marcos", "35", "Brasileiro", "Ebac", "Analista de dados", 5000);
const atribuicoes = new Atribuicoes("Marcos","9 ás 18h", "coletar, organizar, analisar e interpretar grandes conjuntos de dados" );

const pessoa2 = new Pessoa("Pablo", "24", "Argentino");
const funcionario2 = new Funcionario("Pablo","24", "Argentino", "Ebac", "Dev Backend",4000);
const atribuicoes2 = new Atribuicoes("Pablo","10 ás 19h", "planejar, programar, testar e manter a estrutura de códigos");

const pessoa3 = new Pessoa("Joana","48", "Brasileira");
const funcionario3 = new Funcionario("Joana", "48", "Brasileira", "Ligth", "Tecnica Eletronia", 3500);
const atribuicoes3 = new Atribuicoes("Joana","7 ás 17h", "manutenção, instalação e reparação de sistemas eletroeletrônicos convencionais e automatizados");



funcionario.aumento();
funcionario2.aumento();
console.log(pessoa);
console.log(funcionario.getSalario());
console.log(atribuicoes);

console.log(pessoa2);
console.log(funcionario2.getSalario());
console.log(atribuicoes2);
// console.log(pessoa3);



// console.log(funcionario3);


