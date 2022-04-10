const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const multer = require('multer')

// SETTINGS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

// SETTINGS MULTER
const storage = multer.diskStorage({
    destination: path.join(__dirname + '/public/uploads'),
    filename: (req,file,cb) => {
        cb(null,file.originalname)
    }
})

// MIDDLEWARES
app.use(morgan('dev'))

// MIDDLEWARES MULTER
app.use(multer({
    storage: storage,
    dest: path.join(__dirname + '/public/uploads')
}).single('image'))

// ROUTES
app.use(require('./routes/index.routes'))

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), () => {
    console.log('Server on port 5000');
})