<template>
  <h1>Dynamic Componets</h1>
  <p>App.vue switches between which components to show.</p>
  <button @click="toggleValue = !toggleValue">Swith components</button>
  <component :is="activeComp"></component>
</template>

<script>
export default{
  data() {
    return {
      toggleValue : true
    }
  },
  computed: {
    activeComp() {
      if(this.toggleValue){
        return 'comp-one'
      } else {
        return 'comp-two'
      }
    }
  }
}
</script>

<style>
#app {
  width: 350px;
  margin: 10px auto;
}

#app > div {
  border: solid black 2px;
  padding: 10px;
  margin-top: 10px;
}

</style>