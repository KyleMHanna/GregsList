import { ProxyState } from "../AppState";
import { Job } from "../Models/Job";

class JobService {
  addJob(jobData) {
    var testJob = new Job(jobData)
    ProxyState.jobs = [...ProxyState.jobs, testJob]
    console.log('add job in house service')
  }
}

export const jobeService = new JobService()