
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            position: "Software Engineer",
            details: "Working with Kalam was a fantastic experience. His attention to detail and problem-solving skills are outstanding.",
            rating: 5,
            location: "New York, USA",
            img: "https://i.ibb.co/hfwcP0k/indoor-horizontal-image-delighted-good-looking-young-man-looking-directly-smiling-sincerely-wearing.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Project Manager",
            details: "Kalam's ability to deliver high-quality work within tight deadlines is truly commendable.",
            rating: 4.8,
            location: "London, UK",
            img: "https://i.ibb.co/kqfV4GY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg",
        },
        {
            id: 3,
            name: "Ahmed Hassan",
            position: "Entrepreneur",
            details: "Kalam's expertise in web development transformed my business idea into a fully functional platform. Highly recommended!",
            rating: 5,
            location: "Cairo, Egypt",
            img: "https://i.ibb.co/N3RVdT0/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign-53876-129416.jpg",
        },
        {
            id: 4,
            name: "Maria Lopez",
            position: "Graphic Designer",
            details: "Kalam has an eye for design and user experience. His contributions made a huge difference to our project.",
            rating: 4.9,
            location: "Barcelona, Spain",
            img: "https://i.ibb.co/ZY3pcTT/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
        },
        {
            id: 5,
            name: "Samuel Green",
            position: "Digital Marketer",
            details: "Kalam's knowledge of modern web technologies is impressive. He is a pleasure to work with.",
            rating: 4.7,
            location: "Sydney, Australia",
            img: "https://i.ibb.co/CWpgnkN/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra-53876-143269.jpg",
        },
        {
            id: 6,
            name: "Fatima Khan",
            position: "Product Manager",
            details: "Kalam's dedication and ability to solve complex challenges make him an invaluable team member.",
            rating: 5,
            location: "Dubai, UAE",
            img: "https://i.ibb.co/bHK9tVN/close-up-shot-gorgeous-young-mixed-race-brunette-lady-looking-away-with-mysterious-smile-as-if-flirt.jpg",
        },
        {
            id: 7,
            name: "Liam Wilson",
            position: "Full-Stack Developer",
            details: "Kalam's mentorship and guidance have helped me grow significantly as a developer.",
            rating: 4.8,
            location: "Toronto, Canada",
            img: "https://i.ibb.co/qxsRYTT/japanese-programmer-guy-53876-92982.jpg",
        },
        {
            id: 8,
            name: "Sofia Petrova",
            position: "UI/UX Designer",
            details: "Kalam is a true professional. His collaborative approach made the entire project seamless.",
            rating: 4.9,
            location: "Moscow, Russia",
            img: "https://i.ibb.co/kqfV4GY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg",
        },
        {
            id: 9,
            name: "Hiroshi Tanaka",
            position: "CTO",
            details: "Kalam's technical skills and communication are exceptional. He exceeded our expectations in every way.",
            rating: 5,
            location: "Tokyo, Japan",
            img: "https://i.ibb.co/C73QQ3N/business-man-by-skyscraper-1303-13655.jpg",
        },
        {
            id: 10,
            name: "Emily Brown",
            position: "Content Creator",
            details: "Kalam's work ethic and creativity brought my vision to life. I couldn’t be happier with the results!",
            rating: 4.8,
            location: "Los Angeles, USA",
            img: "https://i.ibb.co/ZY3pcTT/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
        },
    ];



    return (
        <div className="w-full py-10 md:py-20 bg-gradient-to-b from-[#040908] to-[rgb(0,0,31)]">
            <div className="w-11/12 mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 to-violet-600 w-fit mx-auto">Testimonials</h1>
                <p className="py-4 pb-10 text-gray-400 text-center">
                    Why Clients Love Working With Me
                </p>
                {/* slider */}
                <div className="">
                    <Slider {...settings} className="mx-4 p-4">
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[0].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[0].name}</h1>
                                    <p className="text-gray-300">{testimonials[0].position}</p>
                                    <p className="text-gray-300">{testimonials[0].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[0].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[1].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[1].name}</h1>
                                    <p className="text-gray-300">{testimonials[1].position}</p>
                                    <p className="text-gray-300">{testimonials[1].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[1].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[2].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[2].name}</h1>
                                    <p className="text-gray-300">{testimonials[2].position}</p>
                                    <p className="text-gray-300">{testimonials[2].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[2].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[3].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[3].name}</h1>
                                    <p className="text-gray-300">{testimonials[3].position}</p>
                                    <p className="text-gray-300">{testimonials[3].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[3].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[4].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[4].name}</h1>
                                    <p className="text-gray-300">{testimonials[4].position}</p>
                                    <p className="text-gray-300">{testimonials[4].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[4].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[5].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[5].name}</h1>
                                    <p className="text-gray-300">{testimonials[5].position}</p>
                                    <p className="text-gray-300">{testimonials[5].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[5].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[6].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[6].name}</h1>
                                    <p className="text-gray-300">{testimonials[6].position}</p>
                                    <p className="text-gray-300">{testimonials[6].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[6].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[7].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[7].name}</h1>
                                    <p className="text-gray-300">{testimonials[7].position}</p>
                                    <p className="text-gray-300">{testimonials[7].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[7].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[8].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[8].name}</h1>
                                    <p className="text-gray-300">{testimonials[8].position}</p>
                                    <p className="text-gray-300">{testimonials[8].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[8].location}</p>
                                </div>

                            </div>
                        </div>
                        <div className="px-4">
                            <div className="p-4 rounded-lg border border-indigo-600 flex justify-center flex-col items-center  ">

                                <img className="w-16 h-16 rounded-full" src={testimonials[9].img} alt="" />
                                <div className="text-center">
                                    <h1 className="text-xl font-bold ">{testimonials[9].name}</h1>
                                    <p className="text-gray-300">{testimonials[9].position}</p>
                                    <p className="text-gray-300">{testimonials[9].details.slice(0, 90)}</p>
                                    <p className="text-gray-300">{testimonials[9].location}</p>
                                </div>

                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;