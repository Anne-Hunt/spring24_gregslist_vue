<script setup>
import { computed } from 'vue';
import { House } from '../models/House.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { housesService } from '../services/HousesService.js';

defineProps({
    house: House
})

const account = computed(()=> AppState.account)

async function trashHouse(houseId){
    try {
        const openTrash = await Pop.confirm('Do you want to trash this listing?')
        if (!openTrash) return
        logger.log('They wanna trash this place', houseId)
        await housesService.trashHouse(houseId)
    } catch (error) {
        logger.log('cannot trash', error)
        Pop.toast('Sorry cannot trash this place just yet', 'error')
    }
}
</script>


<template>
<div class="card bg-light shadow rounded col-md-4 mb-2">
    <img :src="house.imgUrl" :alt="house.id" class="card-img-top">
    <h2 class="fs-5 card-title p-2">{{ house.year }} | {{ house.bedrooms }} beds | {{ house.bathrooms }} baths | {{ house.levels }} levels</h2>
    <div class="card-body p-3">{{ house.description }}
    <h3>${{ house.price }}</h3>
    <p>{{ house.creator.name }}</p>
    <button v-if="house.creatorId == account?.id" @click="trashHouse(house.id)" class="btn btn-danger text-light p-0" title="delete house listing"><i class="mdi mdi-dumpster"></i></button>
</div>
</div>
</template>


<style lang="scss" scoped>

</style>