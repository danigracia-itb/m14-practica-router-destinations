<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <img :src="`/img/${experience.image}`" :alt="experience.name" />
        <p>{{ experience.description }}</p>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";
import { Destination, Experience } from "../types";

const route = useRoute();

const destination = ref<Destination & any>({});
const experience = ref<Experience & any>({});

onMounted(() => {
    destination.value = sourceData.destinations.find(
        (dest: Destination) => dest.id == route.params.id
    );
    experience.value = destination.value.experiences.find(
        (exp: Experience) => exp.slug == route.params.experienceSlug
    );
});
</script>
