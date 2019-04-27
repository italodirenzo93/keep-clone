<template>
    <div class="note-list">
        <note v-for="note in notes" :key="note.id" :title="note.title" :body="note.body"></note>
    </div>
</template>

<script>
import Note from './Note.vue';

export default {
    components: {
        Note
    },
    props: {
        notes: Array
    }
}
</script>

<style>
.note-list {
    display: flex;
    justify-content: center;
}
</style>