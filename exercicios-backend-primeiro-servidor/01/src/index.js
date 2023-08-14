const express = require('express')
const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = jogadores[0]

app.get('/', (req, res) => {
    jogadores.push(jogadores[0])
    jogadores.shift()
    jogadorDaVez = jogadores[0]

    res.send(`É a vez de ${jogadorDaVez} jogar!`)
})

app.listen(3000)