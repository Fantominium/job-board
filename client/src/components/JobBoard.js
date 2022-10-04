import JobList from './JobList';
import { getJobs } from '../graphql/queries';
import { useState, useEffect } from 'react';

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false)
  useEffect(() => {
    getJobs().then(setJobs).catch((err)=>setError(true))
  }, []);
  if (error) {
    return(<p>Data could not be fetched</p>)
  }
  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>{
        jobs ? 
      <JobList jobs={jobs} />
      :
      "Loading"
      }
    </div> 
  );
}

export default JobBoard;
