const express = require("express")
const app = express()
const PORT = 3000

//Código Node - com as rotas e tudo mais
//Cada um app é uma rota
app.get("/", (req, res)=>{
    res.send("Oi Node")

})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

