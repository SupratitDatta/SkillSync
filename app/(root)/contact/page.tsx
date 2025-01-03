import Link from "next/link";

const ContactPage = () => {
    return (
        <section className="contact-us bg-gradient-to-b from-gray-100 to-white text-gray-900 font-sans py-10 px-5">
            <div className="hero-section flex flex-col lg:flex-row items-center gap-10 py-10">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold text-blue-700 tracking-wide text-center">
                        Get In <span className="text-gray-900">Touch</span>
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-700 text-center">
                        Have questions or need assistance? Reach out to us, and we’ll be happy to help! Our team is here to ensure you have the best experience possible.
                    </p>
                </div>
            </div>

            <div className="contact-form py-14">
                <div className="flex flex-col  items-center gap-10">
                    <div className="w-full lg:w-2/3 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-xl border">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                                Contact Details
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                                <span className="font-semibold text-gray-900">Email:</span> support@skillsync.com
                            </p>
                            <p className="text-gray-600 text-lg mb-4">
                                <span className="font-semibold text-gray-900">Phone:</span> +91 5643287547
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <form className="bg-white p-8 rounded-lg shadow-lg border">
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transform hover:scale-105 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-blue-700 text-white py-14 rounded-lg text-center mt-14">
                <h2 className="text-4xl font-bold">We’re Here to Help!</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    Whether you’re a job seeker or an employer, feel free to reach out. Our team is just a message away.
                </p>
                <Link href="/">
                    <button className="mt-6 px-10 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transform hover:scale-105 transition-all">
                        Back to Home
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ContactPage;