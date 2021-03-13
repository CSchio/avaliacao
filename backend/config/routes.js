module.exports = app => {
    const {ordenaLista, interlace}  = require('../api/functions')
    
    app.post('/ordenaLista', ordenaLista)
    app.get('/interlace', interlace)
}