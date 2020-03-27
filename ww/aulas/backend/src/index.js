const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
/**
 Rota / Recurso
**/

/**
 * Metodos HTTP
 * 
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informacao do back-end
 * DELETE : Deletar uma informacao no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query: Parametros nomeados enviados na rota apos o simbolo de "?" (Filtros, paginaçao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NaoRelacionais - NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver : SELECT * FROM users
    * Query Builders: table('users').select(*).where()
    */



app.listen(3333);