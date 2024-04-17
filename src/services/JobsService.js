import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class JobsService {
    async createJob(jobData) {
        const response = await api.post('api/jobs', jobData)
        logger.log('creating job, you job creator', response.data)
        const jobby = new Job(response.data)
        AppState.jobs.push(jobby)
    }

    async getJobs() {
        const response = await api.get('api/jobs')
        logger.log('jobs sent', response.data)
        AppState.jobs = response.data.map(job => new Job(job))
    }

    async trashJob(jobId) {
        const response = await api.delete(`api/job/${jobId}`)
        logger.log('trashed job', response.data)
        const jobs = AppState.jobs
        const jobIndex = jobs.findIndex(job => job.id == jobId)

        if (jobIndex == -1) throw new Error('That index is flawed')
        jobs.splice(jobIndex, 1)
    }
}

export const jobsService = new JobsService()