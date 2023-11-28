import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: Home, alias: "/home" },
        {
            path: "/destination/:id/",
            name: "destination.show",
            component: () => import("@/views/DestinationShow.vue"),
            children: [
                {
                    path: ":experienceSlug",
                    name: "experience.show",
                    component: () => import("@/views/ExperienceShow.vue"),
                },
            ],
        },
    ]
});
export default router;
