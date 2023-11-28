<template>
    <div>
        <section v-if="destination" class="destination">
            <h1>{{ destination.name }}</h1>
            <GoBack />
            <div class="destination-details">
                <img
                    :src="`/img/${destination.image}`"
                    :alt="destination.name"
                    width="400"
                />
                <p>{{ destination.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <router-link
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{
                        name: 'experience.show',
                        params: { experienceSlug: experience.slug },
                    }"
                >
                    <ExperienceCard :experience="experience" />
                </router-link>
            </div>
            <router-view />
        </section>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";

import { Destination } from "../types";

import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

const route = useRoute();

const destination = ref<Destination & any>({});

onMounted(() => {
    destination.value = sourceData.destinations.find(
        (dest: Destination) => dest.id == route.params.id
    );
});
</script>
