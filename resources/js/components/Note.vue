<template>
    <div class="note">
        <h2 class="title">{{title}}</h2>
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
    border: 1px solid #dadce0;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
    width: 240px;
    background-color: white;
    -moz-user-select: none;
    user-select: none;
    margin: 8px;
}
.note:hover {
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149);
}
.note > .title {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
}
.note > .body {
    font-size: 0.9em;
    word-wrap: break-word;
}
</style>
