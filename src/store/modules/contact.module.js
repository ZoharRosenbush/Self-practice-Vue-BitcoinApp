import { contactService } from '../../services/contact.service';

export default {
    strict: true,
    state: {
        contacts: null,
    },
    getters: {
        contacts(state) {
            return state.contacts;
        },
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        saveContact(state, { savedContact }) {
            const idx = state.contacts.findIndex(contact => contact._id === savedContact._id)
            if (idx === -1) state.contacts.push(savedContact)
            else state.contacts.splice(idx, 1, savedContact)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query()
            commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.remove(contactId);
            commit({ type: 'removeContact', contactId });
        },
        async saveContact({ commit }, { contactToSave }) {
            const savedContact = await contactService.save(contactToSave)
            commit({ type: 'saveContact', savedContact });
        }
    }
}