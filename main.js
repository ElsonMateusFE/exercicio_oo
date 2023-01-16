function Escola(nome, sobrenome, cargo){
    this.nome = nome
    this.sobrenome = sobrenome
    this.cargo = cargo
}

function Estudante(nome, sobrenome){
    Escola.call(this, nome, sobrenome, 'Estudante')
}

function Professor(nome, sobrenome, salario){
    Escola.call(this, nome, sobrenome, 'Professor')
    let _salario = salario
    
    this.SetSalario = function(valor){
        _salario = valor
    }

    this.getSalario = function(){
        console.log(`Professor(a) ${this.nome} ${this.sobrenome} ganha R$ ${_salario}`)
    }
}

const estudanteElsonMateus = new Estudante('Elson', 'Mateus')
console.log(estudanteElsonMateus)

const estudanteCharlesCooper = new Estudante('Charles', 'Cooper')
console.log(estudanteCharlesCooper)

const professorGianSouza = new Professor('Gian', 'Souza')
console.log(professorGianSouza)