import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import jobs from "./jobcontent";


const IndividualJobPosting=()=>{
    const [jobInfo,setJobInfo]= useState({upvotes:0, comments:[] });
    const { jobId }=useParams();

    useEffect(()=>{
        const loadJobInfo=async() => {
            const response = await axios.get(`/api/jobs/${jobId}`);
            const newjobInfo = response.data;
            setJobInfo(newjobInfo);
        }
        loadJobInfo();
        
    }, []);

    
    const job=jobs.find(job => job.name === jobId);

    if (!job){
        return <NotFoundPage />
    }



    return (
        <>
            <h1>{job.name}</h1>
            <p>This article has {jobInfo.upvotes} upvote(s)</p>
            {job.description.map((paragraph,i)=> (
                <p key={i}>{paragraph}</p>
            ))}
        </>
    );
}

export default IndividualJobPosting;