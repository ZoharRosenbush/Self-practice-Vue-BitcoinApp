
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, filterBy, delay = 500) {
    let entities = JSON.parse(localStorage.getItem(entityType)) || _createContacts()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })

}



function get(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const contact = entities.find(entity => entity._id === entityId)
            return contact
        })
}

function post(entityType, newEntity) {
    console.log('im in post!')
    newEntity._id = _makeId()

    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}



function put(entityType, updatedEntity) {
    console.log('im in put!')
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}


function _save(entityType, entities) {
    console.log('entityType FROM SAVE!', entityType)
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

function _createContacts() {
    console.log('creating demo contacts')

    const contacts = [
        {
            "_id": "0003640269f443a5d64b32ca",
            "name": "Oren Segal",
            "email": "OrenSegal@renovize.com",
            "phone": "+1 (968) 333-3824"
        },
        {
            "_id": "2212640269f443a5d64b32ca",
            "name": "Zohar Rosenbush",
            "email": "ZoharRo@renovize.com",
            "phone": "+1 (968) 555-3824"
        },
        {
            "_id": "5556640269f443a5d64b32ca",
            "name": "May Aviv",
            "email": "MayAviv@renovize.com",
            "phone": "+1 (968) 888-3824"
        },
        {
            "_id": "0909640269f443a5d64b32ca",
            "name": "Ochoa Hyde",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (968) 999-3824"
        }

    ]

    localStorage.setItem('contactDB', JSON.stringify(contacts))
    return contacts
}



