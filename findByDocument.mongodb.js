const database = 'BD3-BRUNO-AULA';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].findOne(
    {
        "cpf": 71821841722
    }
)