/*
1.
Explique, com suas palavras, o que é um banco de dados NoSQL. Compare-o com um banco de dados relacional,
destacando pelo menos três diferenças principais.

RESPOSTA:
Banco de Dados NoSQL é um banco de Dados não relacional, que ajuda a no dados não estruturados como documentos por exempl, assim oferecendo vflexibilidade, escalabilidade
e desempenho para aplicações modernas;

Banco de Dados Relacional é um banco de Dados que ajuda organizar dados predefinidos, que são armazenados em tabela de colunas e linhas
Principais deferenças

Estrutura de Dados:
Relacional: Armazena dados em tabelas fixas.
NoSQL: Permite diferentes formatos, como documentos (exemplo: MongoDB).


Escalabilidade:
Relacional: Escalável verticalmente (servidores mais potentes).
NoSQL: Escalável horizontalmente (mais servidores para distribuir a carga).


Transações e Consistência:
Relacional: Segue o modelo ACID, garantindo segurança nas transações.
NoSQL: Usa o modelo BASE, priorizando disponibilidade e escalabilidade, com consistência eventual.
*/

/*
2.
O que são collections no MongoDB? Como elas se comparam a tabelas em bancos de dados relacionais?

RESPOSTA:
Collections é um agrupamento de documentos que basicamente segue a ideia de uma tabela de banco de dados, mas mudando como formato de que elas trabalham. 
*/


/*
3.
Qual a função do comando `insertOne`? Em quais situações você o utilizaria?

RESPOSTA
insertOne a função dele é inserir um documento na banco de dados NoSQL e eu utilizaria pra inserir em uma colletions

*/

/*
4.
Diferencie o comando `insertOne` de `insertMany`. Quando você deveria optar por usar um ou outro?

RESPOSTA
insertOne server para colocar apenas um documento no banco, seria bom usar ele para inserir apenas um documento novo no banco de dados;
insertMany server para colocar varios documentos no banco, ele seria usado para inserir uma quantidade grande de documento no banco de dados;

*/

/**
5.
O que o comando `find` faz? Dê exemplos de buscas possíveis com este comando.

RESPOSTA
O comando find é usando para fazer consultas no banco de dados

Aqui ele está buscando todos os documentos na coleção trabalhos
use("fecinavidb")
db.trabalhos.find().pretty()

Aqui ele esta buscado apenas os trabalhos da ares Biológicas
use("fecinavidb")
db.trabalhos.find({area:"Biológicas"}).pretty()

 */

/**
 6.
Imagine que você está criando um sistema de biblioteca online. Quais informações você armazenaria em uma collection de livros?
Descreva pelo menos 5 campos que seriam necessários para representar um livro no MongoDB.

RESPOSTA
Eu colocaria
Título, Autor, Ano de Publicação, Gênero, Disponibilidade.

 */

/**
7.
Como você armazenaria os dados de empréstimos de livros? Descreva um exemplo de document que poderia representar um empréstimo, incluindo referências ao usuário e ao livro.
Criação de Collection e Inserção de Dados:

Crie uma collection chamada `biblioteca`.
 Utilize o comando `insertOne` para adicionar o seguinte documento na collection:
     {

       "titulo": "O Senhor dos Anéis",

       "autor": "J.R.R. Tolkien",

       "ano_publicacao": 1954,

       "genero": "Fantasia",

       "disponivel": true

     }

3. Agora, adicione múltiplos livros à collection utilizando o comando `insertMany`:

     [

       {

         "titulo": "1984",

         "autor": "George Orwell",

         "ano_publicacao": 1949,

         "genero": "Distopia",

         "disponivel": true

       },

       {

         "titulo": "O Pequeno Príncipe",

         "autor": "Antoine de Saint-Exupéry",

         "ano_publicacao": 1943,

         "genero": "Infantil",

         "disponivel": false

       }

     ]

     RESPOSTA 
 */

db.createCollection("biblioteca")

db.biblioteca.insertOne({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano_publicacao: 1954,
    genero: "Fantasia",
    disponivel: true
  });
  
  db.biblioteca.insertMany([
    {
      titulo: "1984",
      autor: "George Orwell",
      ano_publicacao: 1949,
      genero: "Distopia",
      disponivel: true
    },
    {
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      ano_publicacao: 1943,
      genero: "Infantil",
      disponivel: false
    }
  ]);

/**----------------------------------------------------------------------------------------------------------------------------------------------- */
/**
1. 
Faça uma busca para encontrar todos os livros disponíveis na biblioteca.
*/
db.biblioteca.find().pretty()

/**
2. 
Realize uma consulta para encontrar os livros publicados antes do ano 1950.
*/
db.biblioteca.find({ ano_publicacao: { $lt:/*operador que faz buscar menos que ->*/ 1950 } });

/**
3. 
 Encontre todos os livros que pertencem ao gênero "Fantasia".
*/
db.biblioteca.find({ genero: "Fantasia" });

/**
4. 
Altere o estado de disponibilidade do livro "O Pequeno Príncipe" para `true` (disponível) utilizando um comando de atualização.
*/

db.biblioteca.updateOne(
    {titulo: "O Pequeno Príncipe"},
    {$set/*Responsalvel por atualizar o campo*/:{"disponivel":true}}
);
