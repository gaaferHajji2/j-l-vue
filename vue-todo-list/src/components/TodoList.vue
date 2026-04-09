<script setup lang="ts">
    import ListItem from './ListItem.vue';
</script>

<template>
    <ul>
        <ListItem :is-checked="false">This is the slotted content</ListItem>
        <ListItem :is-checked="true">This is the JLoka slotted content</ListItem>
        <ListItem :is-checked="false">This is the slotted content</ListItem>
    </ul>
</template>

<style scoped>
    ul {
        padding: 0;
    }
</style>