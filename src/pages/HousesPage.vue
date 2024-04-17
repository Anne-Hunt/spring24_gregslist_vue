<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

const houses = computed(()=> AppState.houses)
const account = computed(()=> AppState.account)

async function getHouses(){
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.toast('Uh-oh, Houses are gone!', 'error')
    
  }
}

onMounted(()=> {
  getHouses()
  })
</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12 d-flex px-2">
        <h1 class="px-2">Housing</h1>
        <button class="btn btn-outline-primary p-0" title="Add a house posting"><i class="mdi mdi-plus-circle fs-1"></i></button>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <h1>Houses Page!</h1>
        {{ houses }}

      </div>
    </section>
  </div>
</template>


<style scoped></style>