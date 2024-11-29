const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "signup"
})

app.post('/registrar', (req, res) => {
    const sql = "INSERT INTO login (`nome`,`email`,`senha`) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Erro");
        } 
        return res.json(data);
        // if(data.length > 0) {
        //     return res.json("Login feito com sucesso");
        // } else {
        //     return res.json("Não encontrado");
        // }
    })
})

app.listen(8081, () =>{
    console.log("Rodando...");
})