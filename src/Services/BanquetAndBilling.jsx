import styles from "./styles/billing.module.css"

import b1 from "../assets/services/banquet/b1.png"
import b2 from "../assets/services/banquet/b2.jpg"
import f1 from "../assets/services/banquet/f1.png"



import billing1 from "../assets/services/banquet/billing1.png"
import { useEffect, useState } from "react";

export default function BanquetAndBilling() {





    const features = [
        {
            heading: "Effortless Event Booking",
            description: "Quickly reserve venues and manage booking schedules for multiple events, with real-time availability updates.",
            img: f1,  // img set to the already declared variable 'b1'
            width: "500px"
        },
        {
            heading: "Customized Packages and Pricing",
            description: "Create tailored event packages, allowing clients to choose from various services, amenities, and F&B options to suit their preferences.",
            img: f1,  // img set to the already declared variable 'b1'
            width: "450px"
        },
        {
            heading: "Digital Contracts and Invoicing",
            description: "Generate digital contracts and detailed invoices for events, with transparent breakdowns of services, charges, and taxes.",
            img: f1,  // img set to the already declared variable 'b1'
            width: "400px"
        },
        {
            heading: "Integrated Resource Management",
            description: "Allocate staff, catering, and equipment based on event requirements, optimizing resources and reducing overbooking risks.",
            img: f1,  // img set to the already declared variable 'b1'
            width: "340px"
        },
        {
            heading: "Automated Billing System",
            description: "Streamline the billing process with automatic calculations for room charges, F&B services, and additional event-related costs.",
            img: f1,  // img set to the already declared variable 'b1'
            width: "400px"
        },
        {
            heading: "Comprehensive Reports",
            description: "Access real-time reports on event bookings, revenue, and client preferences, enabling better forecasting and decision-making.",
            img: f1,  // img set to the already declared variable 'b1'
            width: "400px"
        }
    ];



    // const benefits = [
    //     {
    //         heading: "Billing Summary",
    //         description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
    //         img: billing1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Billing Summary",
    //         description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
    //         img: billing1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Billing Summary",
    //         description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
    //         img: billing1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Billing Summary",
    //         description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
    //         img: billing1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Billing Summary",
    //         description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
    //         img: billing1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Billing Summary",
    //         description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
    //         img: billing1,
    //         width: "500px"



    //     },



    // ]


    const benefits = [
        {
            heading: "Effortless Slot Booking & Management",
            description: "Easily book and manage slots for weddings, conferences, or parties, offering a seamless experience with integrated services like Wi-Fi and catering options.",
            img: billing1,  // img set to the already declared variable 'b1'
            width: "500px"
        },
        {
            heading: "Efficient Event Management",
            description: "Streamlines booking and scheduling, reducing administrative tasks and enhancing overall efficiency for event planners.",
            img: billing1,  // img set to the already declared variable 'b1'
            width: "450px"
        },
        {
            heading: "Personalized Client Experience",
            description: "Customizable packages enable clients to select services tailored to their specific needs, increasing satisfaction and fostering client loyalty.",
            img: billing1,  // img set to the already declared variable 'b1'
            width: "400px"
        },
        {
            heading: "Transparent Transactions",
            description: "Digital contracts and invoicing provide a clear breakdown of charges, building trust and reducing the risk of disputes.",
            img: billing1,  // img set to the already declared variable 'b1'
            width: "340px"
        },
        {
            heading: "Optimized Resource Allocation",
            description: "Ensures efficient management of staff and equipment, preventing overbooking and maximizing service quality for each event.",
            img: billing1,  // img set to the already declared variable 'b1'
            width: "400px"
        },
        {
            heading: "Streamlined Billing Process",
            description: "Automated billing accurately calculates charges, saving time and minimizing errors during payment.",
            img: billing1,  // img set to the already declared variable 'b1'
            width: "400px"
        }
    ];








    const images = [
        b1
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <>
            <div className={`${styles.mainBox} font-manrope  bg-white text-manrope  pt-28 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
                <div className={styles.section1}>

                    <div className={styles.headingBox}>

                        <div className={styles.mainHeading}>
                            From Intimate Gatherings to Grand Celebrations, We’re Here for You
                        </div>

                        <div className={styles.mainSubHeading}>
                            we bring your vision to life with elegant spaces, personalized décor, and exceptional service. From intimate gatherings to grand celebrations, let us handle the details so you can savor every moment.
                        </div>

                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Banquet Features and Services
                    </div>

                    <div className={styles.section2SubHeading}>
                        Discover unparalleled amenities, personalized services, and elegant spaces crafted to make your special occasion unforgettable
                    </div>


                    <div className={styles.featuresBox}>


                        {features.map((item) =>
                        (
                            <div className={styles.featuresAndImg}>

                                <div >

                                    <div className={styles.featuresHeading}>{item.heading}</div>
                                    <div className={styles.featuresDescription}>{item.description}</div>

                                </div>

                                <div>
                                    <img src={item.img} alt="" />
                                </div>

                            </div>

                        ))}

                    </div>
                </div>

                {/* section3 */}

                <div className={styles.section3}>

                    <div className={styles.billingHeading}>
                        Event Billing & Payment Portal
                    </div>

                    <div className={styles.billingSubHeading}>
                        Our transparent and flexible payment options are designed to accommodate your needs, ensuring a smooth, worry-free process for your special day
                    </div>

                    <div className={styles.billingBox}>
                        {benefits.map((item) =>
                        (
                            <div className={styles.billingDescriptionBox}>


                                <div>
                                    <img src={item.img} alt="" />
                                </div>

                                <div className={styles.summaryDescription}>
                                    <div className={styles.billingDescriptionHeading}>{item.heading}</div>
                                    <div className={styles.billingDescriptionSubHeading}>{item.description}</div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
