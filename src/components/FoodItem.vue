<template>
   <div>
    <h2>{{ foodName }}</h2>
   </div>
</template>

<script>
export default{
    props: ['foodName']
};
</script>

<style>

#red{
    font-weight: bold;
    color: rgb(144, 12, 12);
}

</style>