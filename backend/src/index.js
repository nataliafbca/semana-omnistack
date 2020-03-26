const express = require("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* 
* Rota / Recurso

* Métodos HTTP:

* GET: Buscar uma informação do back end
* POST: Criar uma informação no back end
* PUT: Acessar uma informação no back end
* DELETE: Deletar uma informação no back end

*Tipos de parâmetros: 
Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: parâmetros utilizados para identificar recursos
Requery Body: corpo da requisição, utiizado para criar ou alterar recurso

*Banco de dados
SQL: MySQL, SLQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc

*Driver: SELECT * FROM users
*Query Builder: table('users').select('*)

*/


