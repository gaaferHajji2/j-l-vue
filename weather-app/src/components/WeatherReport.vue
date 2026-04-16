<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

type WeatherData = {
    location: {
        localtime: Date;
        name: string;
        region: string;
    };
    current: {
        temp_c: number;
        temp_f: number;
        precip_mm: number;
        condition: {
            text: string;
            icon: string;
        };
        wind_degree: number;
        wind_kph: number;
        wind_mph: number;
    };
}

type Coords = { latitude: number; longitude: number }
interface Props {
  coords: Coords;
}

const props = defineProps<Props>()
const data: Ref<WeatherData | undefined> = ref()
</script>