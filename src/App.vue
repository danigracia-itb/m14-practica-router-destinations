<template>
    <TheNavigation />
    <div class="container">
        <router-view v-slot="{ Component }" class="main-view">
            <component :is="Component" :key="$route.path"></component>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import TheNavigation from "./components/TheNavigation.vue";
</script>
<style lang="css">
.container {
    display: flex;
}
.main-view {
    width: 100%;
}
</style>
