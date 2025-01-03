import JobDataForm from "@/components/JobDataForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
    const session = await auth();

    if (!session) redirect("/");

    return (
        <>
            <section className="main_container !min-h-[250px]">
                <h1 className="heading">Submit Your Job Opening</h1>
            </section>
            <JobDataForm />
        </>
    );
};

export default Page;