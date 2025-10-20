<template>
   <div>
    <h2>
        {{ foodName }}
        <img src="../assets/images/img_quality.svg" v-show="isFavorite"/>
    </h2>
    <p>{{ foodDesc }}</p>
    <button @click="toggleFavorite">Favorite</button>
   </div>
</template>

<script>
export default{
    props: ['foodName', 'foodDesc','isFavorite'],
    emits: ['toggle-favorite'],
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite', this.foodName);
        }
    }
};
</script>

<style>

img{
    height: 1.5em;
    float: right;
}

#red{
    font-weight: bold;
    color: rgb(144, 12, 12);
}

</style>