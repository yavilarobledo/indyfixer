
import JobLists from '../components/JobLists';
import jobs from './jobcontent';


const AllJobPosting=()=>{
    return (
        <>
        <h1>Job Postings</h1>
        <JobLists jobs={jobs} />
        </>
    );
}

export default AllJobPosting;