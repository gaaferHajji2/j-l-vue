<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    degrees: number
}

const props = defineProps<Props>()

const windStyle = computed(() => ({ "transform": "rotate("+props.degrees+"deg)"}))
</script>

<template>
    <span class="inline-block" :style="windStyle" aria-hidden="true">
        <!-- sr for screen readers -->
        ⬇️ <span class="sr-only">Wind Direction {{ degrees }} degress</span>
    </span>
    
</template>