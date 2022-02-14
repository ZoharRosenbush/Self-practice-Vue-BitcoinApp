import { contactService } from '../../services/contact.service';

export default {
    strict: true,
    state: {
        contacts: null

    },
    getters: {
        contacts(state) {
            return state.contacts;
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        saveContact(state, { contactToSave }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactToSave._id)
            if (idx === -1) state.contacts.push(contactToSave)
            else state.contacts.splice(idx, 1, contactToSave)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query()
            console.log('the contacts', contacts);
            commit({ type: 'setContacts', contacts })
        }

    }
}