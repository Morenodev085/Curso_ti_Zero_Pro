// Função construtora Casa
function Casa(ano, tipo, numero, valorVenda) {
    this.ano = ano;
    this.tipo = tipo;
    this.numero = numero;
    this.valorVenda = valorVenda;
}

// Função construtora Vendedor
function Vendedor(nome, id, casa) {
    this.nome = nome;
    this.id = id;
    this.casa = casa;

    this.descricao = function() {
        if (this.casa) {
            console.log(
                `${this.nome} tem essas opção ${this.casa.tipo}, Número: ${this.casa.numero}, Valor de Venda: ${this.casa.valorVenda} - Essas são as informações do imóvel disponível!`
            );
        } else {
            console.log("Nenhuma casa associada ao vendedor.");
        }
    }
}

// Criação de instâncias
const casa1 = new Casa(2000, 'apartamento', 42, '400 mil');
const casa2 = new Casa(2021, 'casa', 199, '600 mil');

const vendedor1 = new Vendedor('João', 1, casa1);

// Teste do método descricao
vendedor1.descricao();
