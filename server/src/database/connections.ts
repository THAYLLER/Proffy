import knex from 'knex'
import path from 'path'

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') // criando o arquivo dentro da pasta database
    },
    useNullAsDefault: true, //passando parametro padrão do banco de dados
});

export default db;