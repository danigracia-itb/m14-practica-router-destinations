<template>
    <div class="card">
        <img :src="`/img/${experience.image}`" :alt="experience.name" />
        <span class="card__text">
            {{ experience.name }}
        </span>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const {experience} = defineProps(["experience"])
</script>
