const router = require('express').Router()
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')

router.get('/', (req, res) =>{
    res.render("adm/index")
})

router.get('/categoria', (req, res) =>{
    res.render("adm/categoria")
})

router.post('/categoria/nova', (req, res) =>{
    const cadastro = {
        nome: req.body.nome,
        slug: req.body.slug
    }
    new Categoria(cadastro).save().then(() => {console.log("cadastro salvo com sucesso")}).catch((error) => {if (error) throw error})
})

module.exports = router