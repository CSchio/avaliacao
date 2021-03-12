module.exports = (app) => {
    const {ordenaLista, interlace}  = require('./functions')

    app.post('/ordenaLista', ordenaLista)
    app.post('/interlace', interlace)
}