import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class JobsService {

    async getJobs() {
        const response = await api.get('api/jobs')
        logger.log('jobs sent', response.data)
        AppState.jobs = response.data.map(job => new Job(job))
    }
}

export const jobsService = new JobsService()