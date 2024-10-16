
//Instalar a extensão do mongodb no VSCode;
//OK
//Criar uma conexão com o mongodb;
//OK
//Criar um banco de dados chamado “fecinavidb”;
use("fecinavidb");
//Criar uma coleção chamada “trabalhos”. Cada trabalho deve ter os atributos:
db.createCollection("trabalhos");
db.trabalhos.insertOne({
    titulo:"",
    area:"",
    autores:"",
    dataEnvio:"",
    avaliadores:"",
    
})

//título;

//área;

//autores com (nome e e-mail);

//dataEnvio;

//avaliadores com (CPF, nome e nota);

//mediaAvaliacoes;

//Adicione 4 trabalhos na coleção “trabalhos” utilizando o comando insertMany;

//Adicione 1 trabalho na coleção “trabalhos” utilizando o comando insertOne em que a área seja de “Biológicas”;

//Faça um código que liste todos os 5 trabalhos cadastrados na coleção “trabalhos”;

//Faça um código que liste todos os trabalho pertencentes a área de “Biológicas”



