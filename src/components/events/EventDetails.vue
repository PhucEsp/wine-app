<template >
    <div class="event-detail">
        <v-card variant="tonal">
            <v-card-title>{{ event.event_name }}</v-card-title>
            <v-card-subtitle>{{ event.date }}</v-card-subtitle>
            <v-card-text>
                {{ event.description }}
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    props: ['event'],
    data() {
        return {
            title: this.event.event_name,
            subtitle: this.event.date,
            text: this.event.description,
        }
    }
}
</script>
<style lang="scss">
@import "../../static/sass/define.scss";

.event-detail {
    margin-bottom: 14px;
    opacity: 0.7;
    background-color: $sidebar-bg-color;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }
}
</style>