//Criando um baco de dados com mongodb?
//Como Criar um banco de dados?

//use("Nome Banco")
use("dbjododobixo")
db.dropDatabase()
use("dbjogodobixo")

//O que tem no jogo do bixo?
//Deve ter os jogadores: nome,telefone
//Aposta: jogador, valor, 3xanimal
//Sorteio: data, 3xanimal

//NoSQL não é tão bom para relacionamentos NxN

db.createCollection("jogadores")

db.jogadores.insertOne({
    nome:"João",
    telefone:"000000000",
    apostar:[
        {
            sorteioID:"66fd63831fa956ff865b79fa",
            data:"2021-10-02",
            valor:50,
            quantidade:3,
            animais:["Zebra","Macaco","Veado"]
        },
        {
            sorteioID:"66fd63eadd194fd43f362fe4",
            data:"2021-10-02",
            valor:50,
            quantidade:3,
            animais:["Borboleta","Pavão","Porco","Jacaré","Cabra"]
        }
    ]
})
use("dbjogodobixo")
db.createCollection("sorteio")
db.sorteio.insertOne({
    _id:"07d1d4b3-ae22-4d29-8ff3-a5492133d647",
    data:"2024-10-02",
    animais:["Vaca","Macaco","Porco","Pavão","Borboleta","Jacaré","Cabra"]
})


//use("dbjogodobixo")
//db.jogadores.drop()

//1) Adicionem mais 1 sorteio para amanhã.
use("dbjogodobixo")
db.createCollection("sorteio")
db.sorteio.insertOne({
    _id:"07d1d4b3-ae22-4d29-8ff3-a5492133d648",
    data:"2024-10-03",
    animais:["Vaca","Macaco",,"Cabra","Porco","Pavão","Borboleta","Jacaré"]
})
//2) Crie 2 jogadores com duas apostas cada.
use("dbjogodobixo")
db.createCollection("jogadores")
db.jogadores.insertMany([
    {
        nome:"Cleber",
    telefone:"000000000",
    apostar:[
        {
            sorteioID:"07d1d4b3-ae22-4d29-8ff3-a5492133d648",
            data:"2021-10-03",
            valor:50,
            quantidade:3,
            animais:["Jacaré","Porco","Veado"]
        },
        {
            sorteioID:"07d1d4b3-ae22-4d29-8ff3-a5492133d648",
            data:"2021-10-03",
            valor:50,
            quantidade:3,
            animais:["Borboleta","Cobra","Porco","Jacaré","Cabra"]
        }
    ]
    },
    {
        nome:"Pelé",
    telefone:"000000001",
    apostar:[
        {
            sorteioID:"07d1d4b3-ae22-4d29-8ff3-a5492133d648",
            data:"2021-10-03",
            valor:50,
            quantidade:3,
            animais:["Jacaré","Macaco","Veado"]
        },
        {
            sorteioID:"07d1d4b3-ae22-4d29-8ff3-a5492133d648",
            data:"2021-10-03",
            valor:50,
            quantidade:3,
            animais:["Veado","Pavão","Porco","Jacaré","Cabra"]
        }
    ]
    }
])
//Até