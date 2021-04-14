const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app     = express();

// simula um os dados vindos de um DB
const data    = require('./data.js');
const porta   = 3000;
const apiUrl  = 'http://localhost:' + porta;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(porta, function() {
  console.log("API ouvindo a porta: " + apiUrl);
});

app.get('/', function(req, res) { res.send('sucesso!'); });

// rotas de contatos 
app.get('/contatos', function(req, res) {
  res.json(data.contatos);
});

app.get('/contatos/:id', function(req, res) {
  res.json(data.contatos[req.params.id]);
});

app.post('/contatos', function(req, res) {
  try {
    // recupera o contato da requisicao
    const contato = req.body;

    // salva o contato no array de contatos
    var id = data.contatos.length || 1;

    //adiciona um id ao contato
    contato.id = id;

    // adiciona o contato ao array de contatos
    data.contatos.push(contato);
    
    // retorna o status sucess verdadeiro e o contato que foi salvo
    res.json({ success:1, contato: contato });

  } catch(e) {
    console.log(e);
    res.status(400).send('Não foi possivel salvar o contato');
  }
});

// rotas de operadoras
app.get('/operadoras', function(req, res) {
  res.json(data.operadoras);
});