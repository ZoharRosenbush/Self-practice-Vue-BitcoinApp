
import { storageService } from './async-storage.service.js'
const STORAGE_KEY = 'contactDB'

export const contactService = {
    query,
    getById,
    save,
    remove,
}


async function query(filterBy = null) {
    let contacts = await storageService.query(STORAGE_KEY, filterBy)
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
    }

    return contacts
}


async function getById(contactId) {
    return await storageService.get(STORAGE_KEY, contactId)
}


async function save(contactToSave) {
    if (contactToSave._id) {
        return await storageService.put(STORAGE_KEY, contactToSave)

    } else {
        return await storageService.post(STORAGE_KEY, contactToSave)
    }
}

function remove(contactId) {
    return storageService.remove(STORAGE_KEY, contactId)
}


function _createDefaultContacts() {
    console.log('creating contacts')

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

    storageService.saveToStorage(STORAGE_KEY, contacts)
    return contacts
}