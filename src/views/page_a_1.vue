<template>
    <ion-page>
        <ion-content>
            <ion-text>
                PageA1 + {{appId}} + test
            </ion-text>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonContent,
    IonText,
} from '@ionic/vue';
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonText,
    },
    setup() {
        const router = useRouter();
        const appId = computed(() => router.currentRoute.value.params.appid);
        return {
            appId
        };
    }
})
</script>