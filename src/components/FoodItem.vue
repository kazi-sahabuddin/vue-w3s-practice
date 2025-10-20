<template>
   <div>
    <h2>
        {{ foodName }}
        <img src="../assets/images/img_quality.svg" v-show="foodIsFavorite"/>
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click.stop="toggleFavorite">Favorite</button>
   </div>
</template>

<script>
export default{
    props: ['foodName', 'foodDesc','isFavorite'],
    data(){
        return {
            foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.foodIsFavorite = !this.foodIsFavorite;
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