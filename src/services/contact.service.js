
import { storageService } from './async-storage.service.js'
const STORAGE_KEY = 'contactDB'

export const toyService = {
    query,
    getById,
    save,
    remove,
}


function query(filterBy = null) {
    return storageService.query(STORAGE_KEY, filterBy)
}


function getById(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}


function save(contactToSave) {
    if (contactToSave._id) {
        return storageService.put(STORAGE_KEY, contactToSave)
    } else {
        return storageService.post(STORAGE_KEY, contactToSave)
    }
}

async function remove(contactId) {
    return storageService.remove(STORAGE_KEY, contactId)
}
