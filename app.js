const express = require('express');
const pool = require('./src/database/mysql/index');

const app = express();

// Configuração do servidor
const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Consulta SQL para selecionar as 10 primeiras linhas da tabela "exemplo"
const sql = 'SELECT * FROM tgfpro LIMIT 10';


//rota

/*
app.get('/', async (req, res) => {
  try {
    const [rows, fields] = await pool.execute(sql);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  } finally {
    pool.end();
  }
});
*/