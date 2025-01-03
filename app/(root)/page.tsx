import SearchForm from "@/components/SearchForm";
import JobCard, { JobTypeCard } from "@/components/JobCard";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({ searchParams, }: { searchParams: Promise<{ query?: string }>; }) {
    const query = (await searchParams).query;
    const params = { search: query || null };
    const session = await auth();
    console.log(session?.id);
    const { data: posts } = await sanityFetch({ query: JOBS_QUERY, params });

    return (
        <>
            <section className="main_container">
                <h1 className="heading">
                    Find Your Dream Job,  <br />Start Today
                </h1>

                <p className="sub-heading !max-w-3xl">
                    Submit Jobs, Select Developers, and Get Potential Assets for your Organization.
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : "All Job Openings"}
                </p>

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: JobTypeCard) => (
                            <JobCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No Job found</p>
                    )}
                </ul>
            </section>
            <SanityLive />
        </>
    );
}