<template>
    <div class="app">
        <header-component v-once></header-component>
        <sidebar-component v-once></sidebar-component>
        <main class="content">
            <div class="add-container">
                <button class="add-note" @click="addNote()"><i class="fas fa-plus"></i> Add Note</button>
            </div>
            <note-list :notes="notes" @deleted="deleteNote"></note-list>
        </main>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import NoteList from './NoteList.vue';

export default {
    data() {
        return {
            notes: []
        };
    },
    components: {
        HeaderComponent,
        SidebarComponent,
        NoteList
    },
    created() {
        window.axios.get('/api/notes').then(({data}) => {
            this.notes = data;
        });
    },
    methods: {
        addNote() {
            window.axios.post('/api/notes').then(({data}) => {
                this.notes.push(data);
            });
        },
        deleteNote(id) {
            window.axios.delete(`/api/notes/${id}`).then(() => {
                let index = this.notes.findIndex(n => n.id == id);
                this.notes.splice(index, 1);
            });
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
.add-button {
    outline: none;
    border: 1px solid #dadce0;
}
</style>
