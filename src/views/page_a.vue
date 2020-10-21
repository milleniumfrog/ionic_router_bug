<template>
    <ion-page>
        <ion-content>
            <ion-text>
                PageA + {{appId}}
            </ion-text> <br />
            <ion-button @click="router.back()">
                back
            </ion-button> <br/>
            <ion-button :router-link="`/a/${appId}/test`">
                to PageA1
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonContent,
    IonText,
    IonButton,
} from '@ionic/vue';
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonText,
        IonButton,
    },
    setup() {
        const router = useRouter();
        const appId = computed(() => router.currentRoute.value.params.appid);
        return {
            router,
            appId
        };
    }
})
</script>