<template>
  <div>
    <h3>Global Components</h3>
    <p>App.vue</p>
    <p>The CompOne.vue component is used inside both App.vue and CompTwo.vue.</p>
    <comp-one /> <br/>
    <comp-two />
  </div>
</template>

<script></script>

<style>
  p {
    width: 200px;
  }
  #app div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }

  .compOneDiv {
    background-color: lightgreen;
  }

  .compTwoDiv {
    background-color: lightcoral;
  }
</style>