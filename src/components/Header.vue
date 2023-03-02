<template>
    <div class="header">
        Header
    </div>
</template>

<script >
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "../static/sass/define.scss";

.header {
    height: 5%;
    width: 100%;
    background-color: white;
    color: black;
    border-bottom: 3px solid;
    border-image: linear-gradient(to right bottom, $main-color, rgba(245, 245, 245, 0)) 1 100%;
    border-image-slice: 1;
}
</style>