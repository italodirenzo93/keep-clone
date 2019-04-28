<template>
    <div class="note">
    	<button class="delete-note" @click="$emit('deleted')"><i class="fas fa-times"></i></button>
        <h2 class="title">{{title}}</h2>
        <p class="body">{{body}}</p>
    </div>
</template>

<script>
export default {
    props: {
    	id: Number,
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
    position: relative;
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
.delete-note {
    border: none;
    background-color: black;
    border-radius: 100px;
    cursor: pointer;
    color: white;
    width: 24px;
    height: 24px;
    position: absolute;
    top: -12px;
    left: -12px;
    text-align: center;
    display: none;
}
.note:hover > .delete-note {
    display: inline-block;
}
</style>
