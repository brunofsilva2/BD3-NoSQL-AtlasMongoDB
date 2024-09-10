const database = 'BD3-BRUNO-AULA';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].updateOne(
    {cod_aluno: 5},
    {$set: {nome: "Otávio Mendes"}},
    {$set: {cpf: 50782241825}},
    {$set: {rg: "48588788X"}}
)