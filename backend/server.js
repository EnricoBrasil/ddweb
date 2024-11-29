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
    database: "login"
})

app.post('/', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";

    db.query(sql, [req.body.email, req.body.senha], (err, data) => {
        if(err) return res.json("Erro");
        if(data.length > 0) {
            return res.json("Login feito com sucesso");
        } else {
            return res.json("Não encontrado");
        }
    })
})

app.listen(8081, () =>{
    console.log("Rodando...");
})