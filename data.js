const data = {};

data.contatos = [
  {nome: 'Pedro', telefone:'77777777', cor: 'orange', data: new Date(), operadora: { nome:'Oi', cod: 14, categoria:'Celular'} },
  {nome: 'Maria', telefone:'88888888', cor: 'red', data: new Date(), operadora: { nome:'Vivo', cod: 15, categoria:'Celular'} },
  {nome: 'José', telefone:'99999999',cor: 'cyan', data: new Date(), operadora: { nome:'Tim', cod: 41, categoria:'Celular'} }
];

data.operadoras = [
  { nome:'Oi', cod: '14', categoria:'Celular', preco: 2 },
  { nome:'Vivo', cod: '15', categoria:'Celular', preco: 1 },
  { nome:'Tim', cod: '41', categoria:'Celular', preco: 2 } ,
  { nome:'GVT', cod: '25', categoria:'Fixo', preco: 1 },
  { nome:'Embrael', cod: '21', categoria:'Fixo', preco: 3 }
];

module.exports = data;