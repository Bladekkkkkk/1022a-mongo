
//Instalar a extensão do mongodb no VSCode;
//OK
//Criar uma conexão com o mongodb;
//OK
//Criar um banco de dados chamado “fecinavidb”;
use("fecinavidb");
//Criar uma coleção chamada “trabalhos”. Cada trabalho deve ter os atributos:
db.createCollection("trabalhos");
    db.trabalhos.insertMany([
        {
          //título
          titulo: "Sistema de Controle de alimentação para animais de grande porte",
          //área
          area: "Multidisciplinar",
          //autores com (nome e e-mail)
          autores: [
            {
              nome: "Kauã Luiz dos Santos",
              email: "kaua.santos@estudante.ifms.edu.br"
            },
            {
              nome: "Thiago Amaral Scatolin",
              email: "thiago.scatolin@estudante.ifms.edu.br"
            }
          ],
          //dataEnvio
          dataEnvio: "2024-10-17",
          //avaliadores com (CPF, nome e nota)
          avaliadores: [
            {
              nome: "Danilo Micome",
              cpf: "12345612345",
              nota: "10"
            }
          ],
          //mediaAvaliacoes
          mediaAvaliacoes: 9.0
        },
        {
            //título
            titulo: "Desenvolvimento de um Aplicativo de Saúde",
            //área
            area: "Tecnologia",
            //autores com (nome e e-mail)
            autores: [
              {
                nome: "Lucas Pereira",
                email: "lucas.pereira@estudante.ifms.edu.br"
              },
              {
                nome: "Mariana Silva",
                email: "mariana.silva@estudante.ifms.edu.br"
              }
            ],
            //dataEnvio
            dataEnvio: "2024-10-18",
            //avaliadores com (CPF, nome e nota)
            avaliadores: [
              {
                nome: "Fernanda Almeida",
                cpf: "98765432100",
                nota: "9"
              }
            ],
            //mediaAvaliacoes
            mediaAvaliacoes: 8.5
          },
          {
            //título
            titulo: "Aprendendo Libras nas escolas",
            //área
            area: "Educação",
            //autores com (nome e e-mail)
            autores: [
              {
                nome: "Pedro Gomes",
                email: "pedro.gomes@estudante.ifms.edu.br"
              },
              {
                nome: "Ana Beatriz",
                email: "ana.beatriz@estudante.ifms.edu.br"
              }
            ],
            //dataEnvio
            dataEnvio: "2024-10-19",
            //avaliadores com (CPF, nome e nota)
            avaliadores: [
              {
                nome: "Ricardo Lima",
                cpf: "32165498700",
                nota: "9.5"
              }
            ],
            //mediaAvaliacoes
            mediaAvaliacoes: 9.2
          },
          {
            //título
            titulo: "A melhora das máquinas nos campos de sojá",
            //área
            area: "Engenharia Agronômica",
            //autores com (nome e e-mail)
            autores: [
              {
                nome: "Isabela Costa",
                email: "isabela.costa@estudante.ifms.edu.br"
              },
              {
                nome: "Fernando Santos",
                email: "fernando.santos@estudante.ifms.edu.br"
              }
            ],
            //dataEnvio
            dataEnvio: "2024-10-20",
            //avaliadores com (CPF, nome e nota)
            avaliadores: [
              {
                nome: "Juliana Martins",
                cpf: "45612378900",
                nota: "9"
              }
            ],
            //mediaAvaliacoes
            mediaAvaliacoes: 8.8
          }
])
db.trabalhos.insertOne({
    //título
    titulo: "A Importância da Polinização para a Agricultura",
    //área
    area: "Biológicas",
    //autores com (nome e e-mail)
    autores: [
      {
        nome: "Sofia Martins",
        email: "sofia.martins@estudante.ifms.edu.br"
      },
      {
        nome: "Lucas Andrade",
        email: "lucas.andrade@estudante.ifms.edu.br"
      }
    ],
    //dataEnvio
    dataEnvio: "2024-10-29",
    //avaliadores com (CPF, nome e nota)
    avaliadores: [
      {
        nome: "Prof. João Silva",
        cpf: "56789012345",
        nota: "9.5"
      }
    ],
    //mediaAvaliacoes
    mediaAvaliacoes: 9.2
  });

  

//Adicione 4 trabalhos na coleção “trabalhos” utilizando o comando insertMany; OK

//Adicione 1 trabalho na coleção “trabalhos” utilizando o comando insertOne em que a área seja de “Biológicas”; OK

//Faça um código que liste todos os 5 trabalhos cadastrados na coleção “trabalhos”;
use("fecinavidb")
db.trabalhos.find().pretty()

//Faça um código que liste todos os trabalho pertencentes a área de “Biológicas”

use("fecinavidb")
db.trabalhos.find({area:"Biológicas"}).pretty()



