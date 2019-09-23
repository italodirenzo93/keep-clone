import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// Mutation types
export const MUT_LOAD_NOTES = 'LOAD_NOTES';
export const MUT_SELECT_NOTE = 'SELECT_NOTE';

// Action types
export const ACTION_LOAD_NOTES = 'LOAD_NOTES';
export const ACTION_SELECT_NOTE = 'SELECT_NOTE';
export const ACTION_DESELECT_NOTE = 'DESELECT_NOTE';

// Vuex store
export const store = new Vuex.Store({
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
        }
    }
});
