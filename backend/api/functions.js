const { existsOrError, numberOfElementsOrError } = require('./validation')

function ordenaLista (req, res) {
    const listas = req.body.listas ? req.body.listas : null
    try{
        existsOrError(listas, "Listas deve englobar salaN e salaS inválido")
        existsOrError(listas.salaN, "salaN deve existir e ser um array numérico")
        existsOrError(listas.salaS, "salaS deve existir e ser um array de strings")
        listas.salaN.sort()
        listas.salaS.sort()
    }
    catch(msg){
        return res.status(400).send(msg)
    }
    res.status(200).json({listas})
}

function interlace (req, res) {
    const intervaloA = req.body.intervaloA ? req.body.intervaloA : req.query.intervaloA
    const intervaloB = req.body.intervaloB ? req.body.intervaloB : req.query.intervaloB
    try {
        existsOrError(intervaloA, "IntervaloA inexistente")
        existsOrError(intervaloB, "IntervaloB inexistente")
        numberOfElementsOrError(intervaloA, 2, "IntervaloA deve ser um array numérico de dois elementos")
        numberOfElementsOrError(intervaloB, 2, "IntervaloB deve ser um array numérico de dois elementos")
    }
    catch(msg){
        return res.status(400).send(msg)
    }
    
    min = Math.min(Math.min(...intervaloA), Math.min(...intervaloB))
    max = Math.max(Math.max(...intervaloA), Math.max(...intervaloB))
    if (max - min <= Math.abs(intervaloA[1] - intervaloA[0]) + Math.abs(intervaloB[1] - intervaloB[0]))
        res.json({ result: true})
    else res.json({ result: false})
    res.status(200)
}

module.exports = { ordenaLista, interlace }