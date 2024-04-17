<script setup>
import { jobsService } from '../services/JobsService.js';
import Pop from '../utils/Pop.js';
import { computed, onMounted } from 'vue';


async function getJobs(){
    try {
      await jobsService.getJobs()
    }
    catch (error){
      Pop.toast('Whooops! Cannot find those darn jobs, find bootstraps will ya?', 'error');
    }

    onMounted(()=> {
        getJobs()
    })
}
</script>

<template>
<div>
    JOBS, JOBS, JOBS
</div>
</template>


<style lang="scss" scoped>

</style>