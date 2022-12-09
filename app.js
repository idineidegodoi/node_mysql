const express = require("express");

const app = express();

//Aceitando JSON para passar um objeto
app.use(express.json());

//Listar
app.get("/usuarios", (req, res) => {
    return res.json({
        erro: false,
        nome: "idinei",
        email: "idineig@gmail.com"
    });
});

//Visualizar
app.get("/usuario/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        erro: false,
        id,
        nome: "idinei",
        email: "idineig@gmail.com"
    });
});

//Cadastrar
app.post("/usuario", (req, res) => {
    const { nome, email } = req.body;
    return res.json({
        erro: false,
        nome,
        email
    });
});

//Editar
app.put("/usuario", (req, res) => {
    const { id, nome, email } = req.body;
    return res.json({
        erro: false,
        id,
        nome,
        email
    });
});

//Apagar
app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        erro: false,
        id
    });
});

//Liberação do servidor
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});