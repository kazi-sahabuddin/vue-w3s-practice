<template>
 <h3>Slots in vue</h3>
 <p>We create card-like div boxes from the foods array.</p>
  <div id="wrapper">
    <slot-comp v-for="x in foods">
      <img :src="x.url" :alt="x.name">
      <h4>{{ x.name }}</h4>
      <p>{{ x.desc }}</p>
    </slot-comp>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        foods: [
          {name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url:'/assets/images/img_apple.svg'},
          {name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url:'/assets/images/img_pizza.svg'},
          {name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url:'/assets/images/img_rice.svg'},
          {name: 'Fish', desc: 'Fish is an animal that lives in water.', url:'/assets/images/img_fish.svg'},
          {name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url:'/assets/images/img_cake.svg'},
        ]

      };
    }
  }
</script>

<style>
 #wrapper {
  display: flex;
  flex-wrap: wrap;
 }

 #wrapper img {
  display: block;
  margin: auto;
  width: 60%;
 }
</style>