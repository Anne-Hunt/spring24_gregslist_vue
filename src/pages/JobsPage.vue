<script setup>
import { AppState } from '../AppState.js';
import { jobsService } from '../services/JobsService.js';
import Pop from '../utils/Pop.js';
import { computed, onMounted } from 'vue';


const jobs = computed(()=> AppState.jobs)
const account = computed(()=> AppState.account)

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
<div class="container">
    <section class="row">
        <div class="col-12 d-flex py-3 align-items-center">
            <h1 class="px-2">Employment & Jobs</h1>
            <button class="btn btn-outline-primary p-0" title="Add a job posting"><i class="mdi mdi-plus-circle fs-1"></i></button>
        </div>
    </section>
    <section class="row">

        {{ jobs }}
    </section>
</div>
</template>


<style lang="scss" scoped>

</style>