function ordenaLista (req, res) {
    const listas = req.body.listas ? req.body.listas : null
    if(!listas) 
        return res.status(400).send("Json inválido ou inexistente")     
    listas.salaN.sort()
    listas.salaS.sort()
    res.json({listas})
}

function interlace (req, res) {
    const intervaloA = req.body.intervaloA ? req.body.intervaloA : null
    const intervaloB = req.body.intervaloB ? req.body.intervaloB : null
    if(!intervaloA || !intervaloB) 
        return res.status(400).send("Json inválido e/ou IntervaloA ou B inexistentes")     
    
    res.status(200).send()
}

module.exports = { ordenaLista, interlace }