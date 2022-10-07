import { Company, Job} from './db.js';

export const resolvers = {
    Query: {
        job: (_root, {id}) => {
            return Job.findById(id);
        },
        jobs: () => Job.findAll(),
        company: (_root, {id}) => Company.findById(id),
    },
    Mutation:{
        createJob: (_root, {input}, {auth}) => {
            if (!auth) {
                throw new Error('Unauthorized');
            }
            return Job.create(input);
        },
        deleteJob: (_root, {id}, {auth}) => {
            if (!auth) {
                throw new Error('Unauthorized');
            } 
            return Job.delete(id)
        },
        updateJob: (_root, {input}) => {
            return Job.update(input);
        },
    },
    Company: {
        jobs: (company) => Job.findAll((job) => job.companyId === company.id),
    },
    Job: {
        company: (job) => {
return Company.findById(job.companyId)           
        },
    },
};