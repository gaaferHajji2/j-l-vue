<script lang="ts" setup>
import { useCharacterSearch } from '@/composables/marvelApi';
import type { Character } from '@/types/marvel';
import { onMounted, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CharacterCard from './CharacterCard.vue';
import LoadingIndicator from './LoadingIndicator.vue';

const isLoading: Ref<boolean> = ref(false)
const data: Ref<Character[] | undefined> = ref()

const route = useRoute()
const router = useRouter()

const currentPage: Ref<number | string> = ref(0)
const totalPages: Ref<number> = ref(0)

if (route.params.page) {
    currentPage.value = +route.params.page;
}


const getCharacters = async (page: number = 0) => {
    try {
        isLoading.value = true;
        const comics = await useCharacterSearch('', 1);

        data.value = comics.results;
        isLoading.value = false;
    } catch (e) {
        router.push({ path: 'error', query: { info: e as string } })
    }
}

watch(
    () => route.params.page,
    async (newPage) => {
        await getCharacters(+newPage);
    }
);

onMounted(async () => {
    await getCharacters(+currentPage.value);
});
</script>

<template>
    <div>
        <LoadingIndicator v-if="isLoading" text="Loading characters..." />
        <div v-if="data && !isLoading">
            <div class="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <CharacterCard :character="character" :key="character.id" v-for="character in data"></CharacterCard>
            </div>
            <Pagination :total-pages="totalPages" path="/" :current-page="+currentPage"></Pagination>
        </div>
    </div>

</template>