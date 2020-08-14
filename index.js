/* Este crud está sendo criado com um ODM chamado moongose */

// modulos
const mongoose = require('mongoose')
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParse = require ('body-parser')
const app = express()
const path = require('path')
//rotas
const home = require('./routes/home')
const adm = require('./routes/adm')
const objServer = {host: 'localhost', port: '3000'}
// Config
    
    // Body-parser
    app.use(bodyParse.urlencoded({extended: true}))
    app.use(bodyParse.json()) 

    // Arquivos estaticos
    app.use(express.static(path.join(__dirname,'public')))
    // Template Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Conexao com banco Mongodb via mongoose
        mongoose.connect('mongodb://localhost/blog', { 
            useNewUrlParser: true,  useUnifiedTopology: true 
        }).then(() => {
            console.log("Banco de dados conectado")
        }).catch((error) => {
            console.log("Ocorreu algum erro " + error)
        })
    // Rotas
    app.use('/adm', adm)
    app.use('/', home)


    app.listen(objServer.port, objServer.host, () => {
        console.log('Conection complete with success!')
        console.log(`Server Listening at: http://${objServer.host}:${objServer.port}`)
    })