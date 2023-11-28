<template>
    <div id="nav">
        <RouterLink id="logo" to="/">Home</RouterLink>
        <RouterLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{
                name: 'destination.show',
                params: { id: destination.id},
            }"
        >
            {{ destination.name }}
        </RouterLink>
    </div>
</template>
<script setup>
import sourceData from "@/data.json";
import { RouterLink } from "vue-router";
const destinations = sourceData.destinations;
</script>
