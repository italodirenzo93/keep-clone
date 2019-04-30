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
        <note-editor :open="selectedNote !== null" :note="selectedNote" @save="saveNote" @close="selectedNote = null"></note-editor>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import NoteList from './NoteList.vue';
import NoteEditor from './NoteEditor.vue';

export default {
    data() {
        return {
            notes: [],
            selectedNote: null
        };
    },
    components: {
        HeaderComponent,
        SidebarComponent,
        NoteList,
        NoteEditor
    },
    created() {
        window.axios.get('/api/notes').then(({data}) => {
            this.notes = data;
        });
    },
    methods: {
        addNote() {
            this.selectedNote = { id: null, title: '', body: '' };
        },
        deleteNote(id) {
            window.axios.delete(`/api/notes/${id}`).then(() => {
                let index = this.notes.findIndex(n => n.id == id);
                this.notes.splice(index, 1);
            });
        },
        saveNote(note) {
            if (!note.id) {
                window.axios.post('/api/notes', note).then(({data}) => {
                    this.notes.push(data);
                    this.selectedNote = null;
                });
            } else {
                window.axios.put(`/api/notes/${note.id}`, note).then(() => {
                    let n = this.notes.find(x => x.id == note.id);
                    n.title = note.title;
                    n.body = note.body;
                    this.selectedNote = null;
                });
            }
        },
        showEditor(id) {
            this.selectedNote = this.notes.find(note => note.id == id);
        }
    }
}
</script>

<style>
.app {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
        "header header"
        "sidebar content";
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
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149);
}
.add-note:hover {
  background-color: rgba(0.5, 0.5, 0.5, 0.075);
}
</style>
