<template>
    <ion-page>
        <ion-content>
            <ion-text>
                PageB
            </ion-text> <br />
            <ion-button :router-link="`/b/working/test`">
                to PageB1
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
import {  defineComponent } from 'vue'
export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonText,
        IonButton,
    },
    setup() {
        return {
        };
    }
})
</script>