const { Router } = require("express");
const router = Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.post('/uploads', (req,res) => {
    console.log(req.file)
    res.send('Uploaded')
})

module.exports = router