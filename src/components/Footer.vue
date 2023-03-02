<template>
    <div class="footer">
        footer
    </div>
</template>

<script >
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import "../static/sass/define.scss";

.footer {
    height: 5%;
    width: 100%;
    background-color: white;
    color: black;
    border-top: 3px solid;
    border-image: linear-gradient(to left top, $main-color, rgba(245, 245, 245, 0)) 1 100%;
    border-image-slice: 1;

}
</style>