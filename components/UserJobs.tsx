import React from "react";
import { client } from "@/sanity/lib/client";
import { JOBS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import JobCard, { JobTypeCard } from "@/components/JobCard";

const UserJobs = async ({ id }: { id: string }) => {
    const jobs = await client.fetch(JOBS_BY_AUTHOR_QUERY, { id });

    return (
        <>
            {jobs.length > 0 ? (
                jobs.map((startup: JobTypeCard) => (
                    <JobCard key={startup._id} post={startup} />
                ))
            ) : (<p className="no-result">No posts yet</p>)}
        </>
    );
};
export default UserJobs;