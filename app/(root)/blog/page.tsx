import Link from "next/link";

const BlogPage = () => {
    const blogs = [
        {
            title: "The Future of AI in Everyday Life",
            description: "Explore how artificial intelligence is transforming industries and improving our daily experiences.",
            date: "January 3, 2025",
            link: "/blog/future-of-ai",
        },
        {
            title: "10 Tips for Effective Remote Work",
            description: "Master the art of remote work with these 10 practical tips for productivity and work-life balance.",
            date: "December 28, 2024",
            link: "/blog/remote-work-tips",
        },
        {
            title: "Understanding Quantum Computing",
            description: "A beginner-friendly guide to the world of quantum computing and its potential applications.",
            date: "December 20, 2024",
            link: "/blog/quantum-computing",
        },
    ];

    return (
        <section className="blog-page bg-gradient-to-b from-gray-100 to-white text-gray-900 font-sans py-10 px-5">
            <div className="hero-section flex flex-col lg:flex-row items-center gap-10 py-10">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold text-blue-700 tracking-wide text-center">
                        Explore Our <span className="text-gray-900">Blog</span>
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-700 text-center">
                        Stay updated with the latest trends, tips, and insights in technology, productivity, and innovation.
                    </p>
                </div>
            </div>

            <div className="blogs-list py-14">
                <div className="flex flex-col items-center gap-10">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg border"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {blog.title}
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">{blog.description}</p>
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <Link href={blog.link}>
                                    <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transform hover:scale-105 transition-all">
                                        Read More
                                    </button>
                                </Link>
                                <p className="text-gray-500 text-sm mb-6 my-auto">Published on: {blog.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-700 text-white py-14 rounded-lg text-center mt-14">
                <h2 className="text-4xl font-bold">Have Something to Share?</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    Join our community and contribute your insights and ideas to our growing blog.
                </p>
                <Link href="/contact">
                    <button className="mt-6 px-10 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transform hover:scale-105 transition-all">
                        Contact Us
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default BlogPage;