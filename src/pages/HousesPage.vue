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
  <h1>Houses Page!</h1>
  {{ houses }}
</template>


<style scoped></style>