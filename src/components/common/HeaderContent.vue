<template>
    <div class="content-header">
        <h2>{{ header_text }}</h2>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['header_text'],
    data() {
        return {
            dialog: false,
        }
    }
}
</script>
<style lang="scss">
@import "../../static/sass/define.scss";

.content-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $holder-background-color;
    padding: 16px;
    margin-bottom: 20px;

    h2 {
        color: $text-color
    }
}
</style>