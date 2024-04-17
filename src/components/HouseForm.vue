<script setup>
import { Offcanvas } from 'bootstrap';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';

const houseData = ref({
    bedrooms: '',
    bathrooms: '',
    levels: '',
    year: '',
    imgUrl: '',
    price: '',
    description: ''
})

async function createHouse(){
    try {
        logger.log('creating house', houseData)
        await housesService.createHouse(houseData.value)
       houseData.value = {
       bedrooms: '',
       bathrooms: '',
       levels: '',
       year: '',
       imgUrl: '',
       price: '',
       description: ''
       }
        Offcanvas.getOrCreateInstance('#houseOffCanvas').hide()
    } catch (error) {
        Pop.toast('cannot make that house right now', 'error')
    }
}

</script>


<template>
<!-- <button class="btn btn-primary" type="button" data-bs-toggle="houseOffCanvas" data-bs-target="#houseOffCanvas" aria-controls="houseOffCanvas">
Sell A House</button> -->

<div class="offcanvas offcanvas-start show" tabindex="-1" id="houseOffCanvas" aria-labelledby="houseOffCanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="houseOffCanvasLabel">Post a House For Sale</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form @submit.prevent="createHouse()">
            <label class="form-label" for="house-bedrooms">Bedroom Qty</label>
            <input type="text" name="bedrooms" id="house-bedrooms" class="form-control">

            <label class="form-label" for="house-bathroom">Bathroom Qty</label>
            <input type="text" name="bathrooms" id="house-bathroom" class="form-control">

            <label class="form-label" for="house-levels">Levels Qty</label>
            <input type="text" name="levels" id="house-levels" class="form-control">

            <label class="form-label" for="house-price">Price</label>
            <input type="text" name="price" id="house-price" class="form-control">

            <label class="form-label" for="house-year">Year</label>
            <input type="text" name="year" id="house-year" class="form-control">

            <label class="form-label" for="house-description">House Description</label>
            <input type="textarea" name="description" id="house-description" class="form-control">

            <label class="form-label" for="house-img">Image URL</label>
            <input type="url" name="imgUrl" id="house-img" class="form-control">
            <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>