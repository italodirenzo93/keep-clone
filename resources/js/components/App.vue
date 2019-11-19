<template>
    <div class="app">
        <header-component v-once></header-component>
        <sidebar-component v-once></sidebar-component>
        <main class="content">
            <div class="add-container">
                <button class="add-note" @click="addNote()"><i class="fas fa-plus"></i> Add Note</button>
            </div>
            <note-list :notes="notes" @selected="showEditor" @deleted="deleteNote"></note-list>
        </main>
        <note-editor :open="selectedNote !== null" :note="selectedNote" @save="saveNote"
                     @close="closeEditor"></note-editor>
    </div>
</template>

<script>
    import {
        ACTION_LOAD_NOTES,
        ACTION_SELECT_NOTE,
        ACTION_DESELECT_NOTE,
        ACTION_ADD_NOTE,
        ACTION_UPDATE_NOTE,
        ACTION_DELETE_NOTE
    } from "../store";
    import {mapState} from "vuex";

    import HeaderComponent from './HeaderComponent.vue';
    import SidebarComponent from './SidebarComponent.vue';
    import NoteList from './NoteList.vue';
    import NoteEditor from './NoteEditor.vue';

    export default {
        components: {
            HeaderComponent,
            SidebarComponent,
            NoteList,
            NoteEditor
        },
        created() {
            this.$store.dispatch(ACTION_LOAD_NOTES);
        },
        computed: mapState(['notes', 'selectedNote']),
        methods: {
            async addNote() {
                const note = {id: null, title: '', body: ''};
                await this.$store.dispatch(ACTION_SELECT_NOTE, note);
            },
            async deleteNote(id) {
                await this.$store.dispatch(ACTION_DELETE_NOTE, id);
            },
            async saveNote(note) {
                const action = note.id ? ACTION_UPDATE_NOTE : ACTION_ADD_NOTE;
                await this.$store.dispatch(action, note);
                await this.$store.dispatch(ACTION_DESELECT_NOTE);
            },
            async showEditor(id) {
                const selectedNote = this.notes.find(note => note.id === id);
                await this.$store.dispatch(ACTION_SELECT_NOTE, selectedNote);
            },
            async closeEditor() {
                await this.$store.dispatch(ACTION_DESELECT_NOTE);
            }
        }
    }
</script>

<style>
    .app {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-areas: "header header" "sidebar content";
        grid-gap: 3px;
    }

    .content {
        grid-area: content;
    }

    .add-container {
        text-align: center;
        margin: 8px 0;
    }

    .add-note {
        background-color: white;
        cursor: pointer;
        border: 1px solid lightgray;
        padding: 10px 14px;
        border-radius: 20px;
        font-size: 1.13em;
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
        transition: all .5ms ease-in-out;
    }

    .add-note:hover {
        background-color: rgba(0.5, 0.5, 0.5, 0.075);
    }
</style>
