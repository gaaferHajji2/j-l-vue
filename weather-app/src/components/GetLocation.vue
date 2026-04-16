<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

type Geolocation = {
    latitude: number;
    longitude: number;
}

const coords: Ref<Geolocation|undefined> = ref()
const geolocationBlockedByUser: Ref<boolean> = ref(false)
const getGeolocation = async (): Promise<void> => {
    await navigator.geolocation.getCurrentPosition(
        () => {}, 
        (error: {message: string}) => {
            geolocationBlockedByUser.value = true;
            alert(`The error message is: ${error.message}`)
        });
}
</script>