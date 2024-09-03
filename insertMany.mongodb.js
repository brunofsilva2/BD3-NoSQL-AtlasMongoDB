const database = 'BD3-BRUNO-AULA';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].insertMany(
    [
        {
            "cod_aluno": 1,
            "nome": "Guilherme Alves Area Matos",
            "cpf": 85241882511,
            "rg": "41825841X",
            "telefone_aluno": "11986404760",
            "telefone_responsavel": "11986858608",
            "email": "gui.alves19@gmail.com",
            "data_nascimento": "11-10-2005"
        },
        {
            "cod_aluno": 2,
            "nome": "Aurora Rossi",
            "cpf": 71821841722,
            "rg": "223574183",
            "telefone_aluno": "11956538208",
            "telefone_responsavel": "11986855214",
            "email": "auror.rossi18@gmail.com",
            "data_nascimento": "14-05-2004"
        },
        {
            "cod_aluno": 3,
            "nome": "Bruno Ferreira da Silva",
            "cpf": 15712117133,
            "rg": "258149352",
            "telefone_aluno": "11952515211",
            "telefone_responsavel": "11940028922",
            "email": "bruno.19fs@gmail.com",
            "data_nascimento": "22-02-2002"
        },
        {
            "cod_aluno": 4,
            "nome": "Victor Ferreira da Silva",
            "cpf": 52154182563,
            "rg": "7182253696",
            "telefone_aluno": "11925814583",
            "telefone_responsavel": "11925639854",
            "email": "victor.19fs@gmail.com",
            "data_nascimento": "22-10-1998"
        },
        {
            "cod_aluno": 5,
            "nome": "Jose Nilton Barbosa da Silva",
            "cpf": 56500528218,
            "rg": "418258418",
            "telefone_aluno": "11986408214",
            "telefone_responsavel": "11986855282",
            "email": "jose.niltonb@gmail.com",
            "data_nascimento": "20-03-1971"
        },
        {
            "cod_aluno": 6,
            "nome": "Maria José Ferreira dos Santos",
            "cpf": 82141526808,
            "rg": "142552553",
            "telefone_aluno": "11982146985",
            "telefone_responsavel": "11982145233",
            "email": "maria.jsantos",
            "data_nascimento": "16-02-1975"
        },
        {
            "cod_aluno": 7,
            "nome": "Davi Belém Ferreira",
            "cpf": 35715755782,
            "rg": "418258422",
            "telefone_aluno": "11986407152",
            "telefone_responsavel": "11986851111",
            "email": "davi.belem@gmail.com",
            "data_nascimento": "14-04-2009"
        },
        {
            "cod_aluno": 8,
            "nome": "Rogério Belém Ferreira",
            "cpf": 85241882522,
            "rg": "41825841X",
            "telefone_aluno": "11986404760",
            "telefone_responsavel": "11986858608",
            "email": "gui.alves19@gmail.com",
            "data_nascimento": "11-10-2005"
        },
        {
            "cod_aluno": 9,
            "nome": "Guilherme Alves Area Matos",
            "cpf": 85241882511,
            "rg": "41825841X",
            "telefone_aluno": "11986404760",
            "telefone_responsavel": "11986858608",
            "email": "gui.alves19@gmail.com",
            "data_nascimento": "11-10-2005"
        },
        {
            "cod_aluno": 10,
            "nome": "Guilherme Alves Area Matos",
            "cpf": 85241882511,
            "rg": "41825841X",
            "telefone_aluno": "11986404760",
            "telefone_responsavel": "11986858608",
            "email": "gui.alves19@gmail.com",
            "data_nascimento": "11-10-2005"
        }
    ]
)