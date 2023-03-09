<template>
    <HeaderContent :header_text="this.header_text">
        <CreateMemberDialogVue></CreateMemberDialogVue>
    </HeaderContent>
    <EventDetails v-for="event in events" :key="event.id" v-bind:event="event"></EventDetails>
</template>

<script>
import EventDetails from '../components/events/EventDetails.vue'
import EventService from '../api/event.service'
import HeaderContent from '../components/common/HeaderContent.vue'
import CreateMemberDialogVue from '../components/dialog/CreateMemberDialog.vue'
export default {
    components: {
        EventDetails,
        HeaderContent,
        CreateMemberDialogVue
    },
    data() {
        return {
            events: [],
            header_text: 'Events'
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

<style lang="">
    
</style>