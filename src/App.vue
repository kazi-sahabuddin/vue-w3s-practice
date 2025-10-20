<template>
  <h1>Food</h1>
  <div id="wrapper">
    <food-item 
      v-for = "x in foods"
      v-bind:food-name="x"/>
  </div>

</template>

<script>

export default{
  data() {
    return {
      foods: ['Apples', 'Pizza', 'Rice', 'Fish','Cake']
    };
  }
}

</script>

<style>

#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

#wrapper > div:hover {
  cursor: pointer;
}

</style>
