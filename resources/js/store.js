import Vuex from 'vuex';
import axios from 'axios';

// Mutation types
export const MUT_LOAD_NOTES = 'LOAD_NOTES';
export const MUT_SELECT_NOTE = 'SELECT_NOTE';
export const MUT_ADD_NOTE = 'ADD_NOTE';
export const MUT_UPDATE_NOTE = 'UPDATE_NOTE';
export const MUT_DELETE_NOTE = 'DELETE_NOTE';

// Action types
export const ACTION_LOAD_NOTES = 'LOAD_NOTES';
export const ACTION_SELECT_NOTE = 'SELECT_NOTE';
export const ACTION_DESELECT_NOTE = 'DESELECT_NOTE';
export const ACTION_ADD_NOTE = 'ADD_NOTE';
export const ACTION_UPDATE_NOTE = 'UPDATE_NOTE';
export const ACTION_DELETE_NOTE = 'DELETE_NOTE';

// Vuex store
export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        notes: [],
        selectedNote: null
    },
    mutations: {
        [MUT_LOAD_NOTES] (state, notes) {
            state.notes = notes;
        },
        [MUT_SELECT_NOTE] (state, note) {
            state.selectedNote = note;
        },
        [MUT_ADD_NOTE] (state, note) {
            state.notes.push(note);
        },
        [MUT_UPDATE_NOTE] (state, note) {
            const n = state.notes.find(x => x.id === note.id);
            if (!n) {
                throw new RangeError(`Note with ID: ${note.id}, was not found in the array.`);
            }
            n.title = note.title;
            n.body = note.body;
        },
        [MUT_DELETE_NOTE] (state, id) {
            const n = state.notes.findIndex(x => x.id === id);
            if (!n) {
                throw new RangeError(`Note with ID: ${id}, was not found in the array.`);
            }
            state.notes.splice(n, 1);
        }
    },
    actions: {
        async [ACTION_LOAD_NOTES] ({commit}) {
            commit(MUT_LOAD_NOTES, (await axios.get('/api/notes')).data);
        },
        [ACTION_SELECT_NOTE] ({commit}, note) {
            commit(MUT_SELECT_NOTE, note);
        },
        [ACTION_DESELECT_NOTE] ({commit}) {
            commit(MUT_SELECT_NOTE, null);
        },
        async [ACTION_ADD_NOTE] ({commit}, note) {
            commit(MUT_ADD_NOTE, (await axios.post('/api/notes', note)).data);
        },
        async [ACTION_UPDATE_NOTE] ({commit}, note) {
            commit(MUT_UPDATE_NOTE, (await axios.put(`/api/notes/${note.id}`, note)).data);
        },
        async [ACTION_DELETE_NOTE] ({commit}, id) {
            commit(MUT_DELETE_NOTE, await axios.delete(`/api/notes/${id}`));
        }
    }
});
