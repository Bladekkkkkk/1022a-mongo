//MYSQL -> Selecionando o banco de dados que iriamos
//MONGO - > Selecionando o banco de dados, se não existir
//ELE CRIA O BANCO DE DADOS
use('ifms');

db.createCollection("aluno")

db.getCollectionNames()

db.getCollection("aluno").insertOne({
  nome:"Kauã",
  idade:18,
  email:"kaua.santos2@estudante.ifms.edu.br",
  cpf:"07384503167",
  telefone:"67984416427"
})


//Criem outra collection Chamaada "professor"
//NOME, IDADE, EMAIL, CPF, ENDEREÇO, TRABALHO, TELEFONE

//Insira pelo menos 2 professores no banco de dados "escola"

use('escola');
db.createCollection("professor")
db.getCollection("professor").insertOne({
  nome:"Guilherme",
  idade:30,
  email:"guilherme@gmail",
  cpf:"12345678989",
  endereco:"Mora na casa dele",
  trabalho:"Professor",
  telefone:"67456218713"
});
db.getCollection("professor").insertOne({
  nome:"valerio",
  idade:35,
  email:"valeiro@gmail",
  cpf:"12345672139",
  endereco:"Mora na casa dele",
  trabalho:"Professor",
  telefone:"67456223413"
})