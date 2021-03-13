function existsOrError(value, msg) {
    if(!value) throw msg
    if(Array.isArray(value) && value.length === 0) throw msg
}

function numberOfElementsOrError(array, numberOfElements, msg){
    if(!Array.isArray(array) || array.length != numberOfElements) 
        throw msg
}

module.exports = { existsOrError, numberOfElementsOrError }