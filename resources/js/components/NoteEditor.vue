<template>
    <div :class="open ? 'note-editor open' : 'note-editor'">
        <button class="delete-note" style="display: inline-block" aria-label="Close" @click="$emit('close')"><i class="fas fa-times"></i></button>
        <div class="note-title-editor">
            <input ref="titleEditor" type="text" v-model="noteTitle" placeholder="Title" />
        </div>
        <div class="note-body-editor">
            <textarea v-model="noteBody" placeholder="Message"></textarea>
        </div>
        <div class="note-editor-buttons">
            <button class="note-editor-button" title="Save" aria-label="Save" @click="saveNote()"><i class="fas fa-save"></i></button>
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
            data.noteId = null;
            data.noteTitle = '';
            data.noteBody = '';
        }
        return data;
    },
    watch: {
        open(value) {
            if (value === true && this.note) {
                this.noteId = this.note.id ? this.note.id : null;
                this.noteTitle = this.note.title;
                this.noteBody = this.note.body;

                let title = this.$refs.titleEditor;
                title.focus();
            } else {
                this.noteId = null;
                this.noteTitle = '';
                this.noteBody = '';
            }
        }
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
    padding: 12px;
    width: 410px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149);
}
.note-editor.open {
    display: block;
}

.note-editor input,
.note-editor textarea {
    background: none;
    border: none;
    display: block;
    width: 100%;
}
.note-editor-button {
    background: none;
    border: none;
    font-size: 18px;
    border-radius: 100px;
    padding: 4px 11px;
    cursor: pointer;
}
.note-editor-button:hover,
.note-editor-button:focus,
.note-editor-button:active {
    background-color: rgba(60,64,67,0.1);
}
.note-title-editor,
.note-body-editor,
.note-editor-buttons {
    margin: 7px 0;
}

.note-title-editor input {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
}

.note-body-editor textarea {
    height: 240px;
    font-family: Roboto,Arial,sans-serif;
    font-size: 15px;
    font-weight: 400;
    resize: none;
    overflow-y: auto;
}

.note-editor-buttons {
    text-align: right;
    margin-bottom: 0;
}
</style>

