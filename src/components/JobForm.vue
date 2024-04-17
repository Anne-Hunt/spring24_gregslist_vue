<script setup>
import { Offcanvas } from 'bootstrap';
import Pop from '../utils/Pop.js';
import { jobsService } from '../services/JobsService.js';
import { logger } from '../utils/Logger.js';
import { ref } from 'vue';

const jobData = ref({
    jobTitle: '',
    description: '',
    hours: '',
    rate: '',
    company: ''
})

async function createJob(){
    try {
        logger.log('creating a job', jobData)
        await jobsService.createJob(jobData.value)
        jobData.value = {
       jobTitle: '',
       description: '',
       hours: '',
       rate: '',
       company: ''}
        Offcanvas.getOrCreateInstance('#jobOffCanvas').hide()
    } catch (error) {
        Pop.toast('Could not post job', 'error')
    }
}

</script>


<template>
    <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#jobOffCanvas" aria-controls="jobOffCanvas">
Post a Job
</button> -->

<div class="offcanvas offcanvas-start show" tabindex="-1" id="jobOffCanvas" aria-labelledby="jobOffCanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="jobOffCanvasLabel">Post a Job</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form @submit.prevent="createJob()">
        <label class="form-label" for="job-title">Job Title</label>
        <input v-model="jobData.jobTitle" type="string" name="jobTitle" id="job-title" class="form-control" required>

            <label class="form-label" for="job-rate">Pay Rate</label>
            <input v-model="jobData.rate" type="number" name="rate" id="job-rate" class="form-control" required>

            <label class="form-label" for="job-hours">Hours</label>
            <input v-model="jobData.hours" type="number" name="hours" id="job-hours" class="form-control" required>

            <label class="form-label" for="job-description">Job Description</label>
            <input v-model="jobData.description" type="string" name="description" id="description" class="form-control" maxLength="5000">

            <label class="form-label" for="job-company">Company</label>
            <input v-model="jobData.company" type="string" name="company" id="job-company" class="form-control">

            <button type="submit" class="btn btn-success">Submit</button>

    </form>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>