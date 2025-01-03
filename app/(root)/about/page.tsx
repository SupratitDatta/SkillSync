import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {

    const userReview = [
        {
            name: "Zenitsu Agatsuma",
            feedback:
                "I got my dream job at the speed of lightning! I was terrified at first, but this platform made it all so easy!",
            img: "https://i.pinimg.com/564x/d5/48/a2/d548a2c6edf320fe50064650769c9855.jpg",
        },
        {
            name: "Light Yagami",
            feedback:
                "I strategically found the perfect candidate with minimal effort. Everything went according to my plan. This platform is truly flawless.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzO0YuUaqvg8BdZGaiK7wy-xEUTC9T9Laig&s",
        },
        {
            name: "Ayanokoji Kiyotaka",
            feedback:
                "I used this platform with calculated precision, and it worked perfectly. Simple, efficient, and effective—just the way I like it.",
            img: "https://preview.redd.it/why-do-some-people-even-want-to-be-like-ayanokoji-v0-pyrpkeav3und1.png?width=640&crop=smart&auto=webp&s=9776eed3511b3bf4ef3053a82c3f4aa65e809b3d",
        },
    ];

    return (
        <section className="about-us bg-gradient-to-b from-gray-100 to-white text-gray-900 font-sans py-10 px-5">
            <div className="hero-section flex flex-col lg:flex-row items-center gap-10 py-10">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold text-blue-700 tracking-wide">
                        About <span className="text-gray-900">Us</span>
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-700">
                        Welcome to our job-finding platform! We are dedicated to connecting
                        job seekers with their dream opportunities while helping employers
                        find the right talent. Our mission is to empower individuals and
                        organizations to thrive together.
                    </p>
                </div>
                <Image
                    src="/about.jpg"
                    alt="About Us"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg"
                />
                <div className="stage">
                    <div className="pyramid3d">
                        <div className="triangle side1"></div>
                        <div className="triangle side2"></div>
                        <div className="triangle side3"></div>
                        <div className="triangle side4"></div>
                    </div>
                </div>
            </div>

            <div className="vision-mission py-14">
                <h2 className="text-4xl font-semibold text-center text-blue-700 mb-12">
                    Our Vision & Mission
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow-xl transform hover:scale-105 transition-all">
                        <h3 className="text-2xl font-bold text-center text-gray-900">
                            Our Vision
                        </h3>
                        <p className="mt-4 text-base text-gray-600 leading-relaxed">
                            To revolutionize the job market by creating meaningful
                            connections between job seekers and employers.
                        </p>
                    </div>
                    <div className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow-xl transform hover:scale-105 transition-all">
                        <h3 className="text-2xl font-bold text-center text-gray-900">
                            Our Mission
                        </h3>
                        <p className="mt-4 text-base text-gray-600 leading-relaxed">
                            To provide an easy-to-use platform that simplifies the hiring
                            process with transparency, efficiency, and reliability at its
                            core.
                        </p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <h2 className="text-4xl font-semibold text-center text-blue-700 mb-10">
                    What People Are Saying
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {userReview.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="testimonial-card text-center p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all md:w-1/5 sm:w-full"
                        >
                            <Image
                                src={testimonial.img}
                                alt={testimonial.name}
                                width={100}
                                height={100}
                                className="rounded-full mx-auto w-28 h-28 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mt-4">
                                {testimonial.name}
                            </h3>
                            <p className="text-gray-600 text-sm italic mt-3">
                                "{testimonial.feedback}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-700 text-white py-14 rounded-lg text-center mt-14">
                <h2 className="text-4xl font-bold">Join Us Today!</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    Start your journey towards finding the perfect job or the ideal
                    candidate. We are here to make the process seamless and rewarding.
                </p>
                <Link href="/">
                    <button className="mt-6 px-10 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transform hover:scale-105 transition-all">
                        Get Started
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default AboutPage;