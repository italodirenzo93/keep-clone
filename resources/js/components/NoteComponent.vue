<template>
    <div class="note">
        <p class="title">{{title}}</p>
        <p class="body">{{body}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            body: String
        }
    }
</script>

<style>
    .note {
        display: inline-block;
        border: 1px solid lightgrey;
        border-radius: 8px;
        padding: 10px;
        cursor: pointer;
        width: 240px;
        background-color: white;
    }

    .note:hover {
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149);
    }

    .note > .title {
        margin: 0;
    }

    .note > .body {
        font-size: 0.9em;
    }
</style>
