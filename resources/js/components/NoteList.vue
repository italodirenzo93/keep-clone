<template>
    <div class="note-list">
        <note
            v-for="note in notes"
            :key="note.id"
            :id="note.id"
            :title="note.title"
            :body="note.body"
            @selected="$emit('selected', note.id)"
            @deleted="$emit('deleted', note.id)"
        ></note>
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
    justify-content: flex-start;
    flex-flow: row wrap;
}
</style>
