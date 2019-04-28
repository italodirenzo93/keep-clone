<template>
    <div :class="open ? 'note-editor open' : 'note-editor'">
        <div class="note-title-editor">
            <input type="text" v-model="noteTitle" />
        </div>
        <div class="note-body-editor">
            <textarea v-model="noteBody"></textarea>
        </div>
        <div class="note-editor-buttons">
            <button class="note-editor-button" @click="$emit('close')"><i class="fas fa-times"></i></button>
            <button class="note-editor-button" @click="saveNote()"><i class="fas fa-save"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        note: Object,
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        let data = {};
        if (this.note) {
            data.noteId = this.note.id;
            data.noteTitle = this.note.title;
            data.noteBody = this.note.body
        } else {
            data.noteTitle = '';
            data.noteBody = '';
        }
        return data;
    },
    methods: {
        saveNote() {
            let note = {
                id: this.noteId,
                title: this.noteTitle,
                body: this.noteBody
            };
            this.$emit('save', note);
        }
    }
}
</script>

<style>
.note-editor {
    display: none;
    position: fixed;
    z-index: 3;
    width: 900px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
}
.note-editor.open {
    display: block;
}
</style>

