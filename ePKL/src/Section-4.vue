<script setup>
import Feature from './components/Feature.vue'
</script>
<template>
    <div class="container">
        <Feature/>
    </div>
</template>
<style scoped>
    .container{
        max-width: 348px;
        max-height: 235px;
        border: 2px #2e495e solid;
        border-radius: 9px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        background-color: none;
        padding: 10px;
    }
</style>