import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jobs"
}) 

class JobService {

async deleteJob(jobId){
  await api.delete(jobId)
  ProxyState.jobs =ProxyState.jobs.filter(j=> j.id !== jobId)
}

async addJob(jobData) {
let res = await api.post('',jobData)
  ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }

  async getJobs(){
    let response = await api.get()
    ProxyState.jobs= response.data.map (j => new Job(j))
  }
}

export const jobService = new JobService()