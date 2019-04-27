<template>
    <div class="app">
        <header-component v-once></header-component>
        <sidebar-component v-once></sidebar-component>
        <div class="notes">
            <note v-for="note in notes" :key="note.id" :title="note.title" :body="note.body"></note>
        </div>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import NoteComponent from './NoteComponent.vue';

export default {
    data() {
        return {
            notes: []
        };
    },
    components: {
        HeaderComponent,
        SidebarComponent,
        'note': NoteComponent
    },
    created() {
        // window.axios.get('/notes').then(({data}) => {
        //     this.notes = data;
        // });
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
}
.app {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
        "header header"
        "sidebar content";
    grid-gap: 3px;
}
</style>
