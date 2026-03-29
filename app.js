const express = require('express');
const app = express();//importa e inicializa o modulo express e o servidor express
app.use(express.json());//midlleare que converse o corpo das requi...(body) para json

let users = [
    {id:1,name:"Alice"},
    {id:2,name:"Bob"}
 
];
// definimos uma variavel let que simula uma tabela em um banco de dados
//Definimos as rotas ou os endpoints
app.get('/users',(req,res)=> {//Define a rota GET para a URL /users
    res.json(users);//// Responde enviando o array completo de usuários em formato JSON
});

app.get('/users/:id',(req,res)=>{
    //Procura  no array o usuario cujo ID seja igual ao parametro enviado na URL 

    const user= users.find(u => u.id === parseInt(req.params.id));

    //Se nao encontrar,retorno o  erro 404 (NOT FOUND)
    if (!user) return res.status(404).send('Usuário não encontrado');

    // Se encontroo,retorna objeto do usuario 
    res.json(user);
});

app.post('/users', (req, res) =>{
    //// Cria um novo objeto pegando o tamanho do array + 1 para o ID e o nome vindo do corpo da requisição
    const newUser = { id: users.length +1, name:req.body.name};
    // Adiciona ao "banco de dados"
    users.push(newUser);
    res.status(201).json(newUser); // Retorna o status 201 (Created) e o usuário criado

});

app.put('/users/:id',(req,res)=>{

    const user = users.find(u=> u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuário Não encontrado');

    user.name=req.body.name; //ltera o nome do usuário encontrado para o novo nome enviado no corpo da requisicao
    res.json(user)//retorna o usuario autalizado 

});

app.delete('/users/:id',(req,res) => 
{
    //filter o array mantendo so quem tem ID diiferente do id diferente do corpo que queremos apagar 
    users = users.filter(u=> u.id !== parseInt(req.params.id) );
    res.status(204).send();// Retorna status 204 (No Content), indicando sucesso sem corpo de resposta

});




app.listen(3000, () => {
    console.log('🚀 API rodando em http://localhost:3000');
});

// parseInt() O que faz: Converte uma string em um número inteiro.
//2. users.find()  É um método de arrays do JavaScript. O que faz: Percorre o array e retorna o primeiro item que satisfizer a condição que você criou.
//req.params O objeto req (Request) contém tudo o que o cliente enviou para o servidor.
//res.status() 