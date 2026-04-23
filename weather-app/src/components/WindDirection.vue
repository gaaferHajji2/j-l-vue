<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    degrees: number
}
const props = defineProps<Props>()
const windStyle = computed(() => ({ "transform": "rotate("+props.degrees+"deg)"}))
</script>

<template>
    <span class="inline-block" :style="windStyle" aria-hidden="true" data-testid="direction">⬇️</span>
    <!-- sr for screen readers -->
    <span class="sr-only" data-testid="direction-sr">Wind Direction {{ degrees }} degrees</span>
</template>