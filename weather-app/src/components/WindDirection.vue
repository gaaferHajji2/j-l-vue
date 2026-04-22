<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    degrees: number
}

const props = defineProps<Props>()

const windStyle = computed(() => ({ "transform": "rotate("+props.degrees+"deg)"}))


</script>

<template>

</template>