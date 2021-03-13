const { existsOrError, numberOfElementsOrError } = require('./validation')

function ordenaLista (req, res) {
    const listas = req.body.listas ? req.body.listas : null
    try{
        existsOrError(listas, "Json inválido ou inexistente")
        listas.salaN.sort()
        listas.salaS.sort()
    }
    catch(msg){
        return res.status(400).send(msg)
    }
    res.json({listas})
}

function interlace (req, res) {
    const intervaloA = req.body.intervaloA ? req.body.intervaloA : null
    const intervaloB = req.body.intervaloB ? req.body.intervaloB : null

    try {
        existsOrError(intervaloA, "IntervaloA inexistente")
        existsOrError(intervaloB, "IntervaloB inexistente")
        numberOfElementsOrError(intervaloA, 2, "IntervaloA deve possuir dois elementos")
        numberOfElementsOrError(intervaloB, 2, "IntervaloB deve possuir dois elementos")
    }
    catch(msg){
        return res.status(400).send(msg)
    }
    
    min = Math.min(Math.min(...intervaloA), Math.min(...intervaloB))
    max = Math.max(Math.max(...intervaloA), Math.max(...intervaloB))
    if (max - min <= Math.abs(intervaloA[1] - intervaloA[0]) + Math.abs(intervaloB[1] - intervaloB[0]))
        res.json({ result: true})
    else res.json({ result: false})

    res.status(200).send()
}

module.exports = { ordenaLista, interlace }