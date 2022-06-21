const express = require('express');
const app = express();
const port = 8080;
app.use(express.static('public'));



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(port, ()=>{
    console.log('Servidor funcionando ' + port);
});
