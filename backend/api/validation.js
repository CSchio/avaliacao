function existsOrError(value, msg) {
    if(!value) throw msg
    if(Array.isArray(value) && value.length === 0) throw msg
}

function validateArray(array, type, msg){
    if(!array.every(element => typeof element === type))
        throw msg
}

function validateInterlace(array, numberOfElements, msg){
    if(!Array.isArray(array) || array.length != numberOfElements) 
        throw msg
    if(!array.every(element => !isNaN(element)))
        throw msg
}

module.exports = { existsOrError, validateInterlace, validateArray }