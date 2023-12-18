import {Link} from 'react-router-dom';


const JobLists = ({jobs}) => {
    return (
        <>
        {jobs.map(job=>(
            <Link key={job.name} className="job-list-item" to={`/alljobs/${job.name}`}>
                <h3>{job.category}</h3>
                <h6>{job.name}</h6>
                <p>{job.description[0].substring(0,150)}...</p>
            </Link>
        ))}
        </>
    );
}

export default JobLists;