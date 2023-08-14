const express = require('express')
const app = express()

let start = false
let play = false
let minuto = 0
let segundo = 0
let teste

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minuto.toString().padStart(2, 0)} minutos e ${segundo.toString().padStart(2, 0)} segundos `)
})

app.get('/iniciar', (req, res) => {
    if (start === false) {
        start = true
        play = true

        teste = setInterval(function () {
            segundo++
            if (segundo === 60) {
                segundo = 0
                minuto++
            }
        }, 1000);
    }
    res.send('Cronômetro iniciado!')
})

app.get('/pausar', (req, res) => {
    clearInterval(teste)
    play = false

    res.send('Cronômetro pausado!')
})

app.get('/continuar', (req, res) => {

    if (play === false && start === true) {
        teste = setInterval(function () {
            segundo++
            if (segundo === 60) {
                segundo = 0
                minuto++
            }
        }, 1000);
    }

    res.send('Cronômetro continuando!')
})

app.get('/zerar', (req, res) => {
    minuto = 0
    segundo = 0

    res.send('Cronômetro zerado!')
})


app.listen(8000)