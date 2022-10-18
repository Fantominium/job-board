import { Company, Job, User} from './db.js';

export const resolvers = {
    Query: {
        job: (_root, {id}) => {
            return Job.findById(id);
        },
        jobs: () => Job.findAll(),
        company: (_root, {id}) => Company.findById(id),
    },
    Mutation:{
        createJob: (_root, {input}, {user}) => {
            if (!user) {
                throw new Error('Unauthorized');
            }
            return Job.create({...input, companyId: user.companyId} );
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