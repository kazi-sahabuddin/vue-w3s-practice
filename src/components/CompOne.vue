<template>
    <div>
        <img :src="imgSrc"/>
        <h2>Component One</h2>
        <p>Choose food.</p>
        <label>
            <input type="radio" name="rbgFood" v-model="imgSrc" :value="/public/"
        </label>
    </div>
</template>

<script></script>

<style scoped>
    div{
        background-color: lightgreen;
    }
</style>