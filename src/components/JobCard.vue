<script setup>
import { AppState } from '../AppState.js';
import { computed } from 'vue';
import { Job } from '../models/Job.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { jobsService } from '../services/JobsService.js';

defineProps({
    job: Job
})

const account = computed(()=> AppState.account)

async function trashJob(jobId){
    try {
        const openTrash = await Pop.confirm('Do you want to delete this job permanently?')
        if (!openTrash) return
        logger.log('throwing away this opportunity', jobId)
        await jobsService.trashJob()
    } catch (error) {
        logger.log(error)
        Pop.toast('Unable to remove job', 'error')
    }
}
</script>


<template>
<div class="bg-light rounded shadow p-3 mb-2">
    <div>

        <h2>{{ job.jobTitle }}</h2>
        <p class="mb-2">{{ job.company }}</p> | {{ job.creator.name }} | Posted {{ job.createdAt.toLocaleDateString() }}
        <div class="row">
            <p>{{ job.description }}</p>
            <span>{{ job.hours }} hours | ${{ job.rate }}</span>
        </div>
        <button v-if="job.creatorId == account?.id" @click="trashJob(job.id)" class="btn btn-danger text-light" title="remove the post"><i class="mdi mdi-trash"></i></button>
    </div>
</div>
</template>


<style lang="scss" scoped>

</style>