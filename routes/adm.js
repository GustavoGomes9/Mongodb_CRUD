const router = require('express').Router()

router.get('/', (req, res) =>{
    res.render("adm/index")
})


module.exports = router