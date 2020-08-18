const router = require('express').Router()
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')

router.get('adm/', (req, res) =>{
    res.render("adm/index")
})

router.get('/categoria', (req, res) =>{
    res.render("adm/categoria")
})

router.post('/categoria/nova', (req, res) =>{
        var erros = []

        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: "Nome invalido"})
        }
        
        if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
            erros.push({texto: "Slug invalido"})
        }

        if(req.body.nome.length < 2){
            erros.push({texto: "nome da categoria muito pequeno"})
        }

        if(erros.length > 0){
            res.render("adm/categoria", {erros: erros})
        }
        else{
            const cadastro = {
                nome: req.body.nome,
                slug: req.body.slug
            }
            new Categoria(cadastro).save().then(() => {
                req.flash("success_msg", "Categoria criada com sucesso")
                res.redirect('/')
            }).catch((error) => {
                if (error) throw error
                req.flash("error_msg", "Erro ao salvar categoria")
            })
             }
       
})

module.exports = router