
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    saveToStorage,
}

function query(entityType, filterBy, delay = 500) {
    const entities = JSON.parse(localStorage.getItem(entityType))
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })

}



async function get(entityType, entityId) {
    const entities = await query(entityType)
    return entities.find(entity => entity._id === entityId)
}

async function post(entityType, newEntity) {
    console.log('POSTING')
    newEntity._id = _makeId()
    let entities = await query(entityType)
    entities.push(newEntity)
    saveToStorage(entityType, entities)
    return newEntity

}



async function put(entityType, updatedEntity) {
    console.log('PUTTING')
    let entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    saveToStorage(entityType, entities)
    return updatedEntity

}

async function remove(entityType, entityId) {
    let entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    saveToStorage(entityType, entities)
}


function saveToStorage(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}



function _makeId(length = 4) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}





