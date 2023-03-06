<script>
import EventDetails from '../components/events/EventDetails.vue'
import EventService from '../api/event.service'
export default {
    components: {
        EventDetails
    },
    data() {
        return {
            events: []
        }
    },
    created() {
        this.getEvents();
    },
    methods: {
        getEvents() {
            EventService.getAll().then((data) => {
                this.events = data;
            });
        },
    },
}
</script>

<template>
    <h2>Event</h2>
    <EventDetails v-for="event in events" :key="event.id" v-bind:event="event"></EventDetails>
</template>

<style lang="">
    
</style>