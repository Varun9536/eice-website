import React from 'react'
import styles from "./styles/roomBooking.module.css"

import mainImg from "../assets/services/room/room.png"
import f1 from "../assets/services/room/f1.png"
import b1 from "../assets/services/room/b1.png"


import { useEffect, useState } from "react";


export default function RoomBooking() {

    // const features = [
    //     {
    //         heading: "Comprehensive Financial Tracking",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: f1,
    //         width: "700px"



    //     },

    //     {
    //         heading: "Automated Invoicing and Billing",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: f1,
    //         width: "500px"

    //     },

    //     {
    //         heading: "Real-Time Financial Reports",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: f1,
    //         width: "500px"
    //     },

    //     {
    //         heading: "Budgeting & Forecasting",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: f1,
    //         width: "500px"
    //     },

    //     {
    //         heading: "Tax Compliance and Filing Support",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: f1,
    //         width: "500px"
    //     },

    //     {
    //         heading: "Cash Flow Management",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: f1,
    //         width: "500px"
    //     },


    // ]



    const features = [
        {
            heading: "Real-Time Data Integration and Management",
            description: "Ensuring up-to-date availability and booking information to improve guest experience and operational efficiency.",
            img: ""
        },
        {
            heading: "Personalized Guest Experience",
            description: "Offering flexible room selections, customizable booking options, and tailored add-ons to enhance guest satisfaction and loyalty.",
            img: ""
        },
        {
            heading: "Dynamic Pricing Models",
            description: "Implementing automated pricing strategies based on demand, seasonality, and promotions to maximize revenue.",
            img: ""
        },
        {
            heading: "Payment Security and User Experience",
            description: "Integrating secure payment gateways and ensuring a seamless, hassle-free checkout process for guests.",
            img: ""
        },
        {
            heading: "Booking and Reservation Management Systems",
            description: "Centralized systems for managing bookings, check-ins, and cancellations to optimize room occupancy rates and streamline operations.",
            img: ""
        },
        {
            heading: "Mobile and Multi-Platform Optimization",
            description: "Ensuring a responsive, user-friendly booking experience across all devices, enhancing accessibility for on-the-go customers.",
            img: ""
        }
    ];




    // const benifits = [
    //     {
    //         heading: "Improved Efficiency",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: b1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Enhanced Vendor Collaboration",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: b1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Cost Savings",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: b1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Data-Driven Decision Making",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: b1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Compliance & Risk Management",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: b1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Barcode Scanning Integration",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: b1,
    //         width: "500px"



    //     },



    // ]


    const benefits = [
        {
          heading: "Effortless Booking Process",
          description: "Easily book suites, deluxe, and standard rooms with integrated Wi-Fi access, providing guests with a convenient and comfortable experience.",
          img: b1,
          width: "500px"
        },
        {
          heading: "Enhanced Guest Experience",
          description: "Simplifies the booking process, increasing customer satisfaction and loyalty by offering a smooth, user-friendly experience from reservation to check-in.",
          img: b1,
          width: "500px"
        },
        {
          heading: "Increased Operational Efficiency",
          description: "Reduces the manual workload for staff, minimizes booking errors, and streamlines processes, enabling staff to focus on delivering outstanding guest services.",
          img: b1,
          width: "500px"
        },
        {
          heading: "Revenue Maximization",
          description: "Optimizes room occupancy and boosts revenue through dynamic pricing, targeted promotions, and real-time inventory management.",
          img: b1,
          width: "500px"
        },
        {
          heading: "Centralized Booking Management",
          description: "Offers a unified platform for handling all room reservations, reducing administrative complexity and providing better visibility for effective resource allocation.",
          img: b1,
          width: "500px"
        },
        {
          heading: "Data-Driven Insights",
          description: "Provides comprehensive analytics on booking trends, guest preferences, and occupancy rates, allowing for data-driven decision-making and strategic planning.",
          img: b1,
          width: "500px"
        }
      ];






    const images = [
        mainImg
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
                            Seamless Hotel and Room Booking Management

                        </div>

                        <div className={styles.mainSubHeading}>
                        Our Room Booking module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to simplify and streamline the booking process for hotels, resorts, clubs, and event venues. From standard rooms to luxury suites, this feature offers an intuitive, user-friendly interface for both 

                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Key Features of Our Hotel and Room Booking Software

                    </div>

                    <div className={styles.section2SubHeading}>
                        An All-In-One Solution for Streamlined Bookings, Optimized Operations, and Enhanced Customer Satisfaction
                    </div>


                    <div className={styles.featuresBox}>


                        {features.map((item) =>
                        (
                            <div className={styles.featuresAndImg}>

                                <div className={styles.featuresContent} >

                                    <div className={styles.featuresHeading}>{item.heading}</div>
                                    <div className={styles.featuresDescription}>{item.description}</div>

                                </div>

                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img style={{ maxWidth: "80%" }} src={item.img} alt="" />
                                </div>



                            </div>

                        ))}



                    </div>



                </div>

                {/* section3   Features*/}

                <div className={styles.section3}>

                    <div className={styles.benifitsHeading}>
                        Benefits of Using Our Hotel and Room Booking Software

                    </div>

                    <div className={styles.benifitsSubHeading}>
                        Unlock Greater Efficiency, Increase Revenue, and Enhance Guest Satisfaction with Our Hotel and Room Booking Software, Offering Real-Time Availability, Seamless Reservations, and Smart Pricing for Optimized Hotel Operations
                    </div>

                    <div className={styles.benifitsBox}>
                        {benefits.map((item) =>
                        (
                            <div className={styles.benifitsDescriptionBox}>


                                <div>
                                    {/* <img style={{ width: "700px" }} src={item.img} alt="" /> */}
                                </div>

                                <div className={styles.summaryDescription}>
                                    <div className={styles.benifitsDescriptionHeading}>{item.heading}</div>
                                    <div className={styles.benifitsDescriptionSubHeading}>{item.description}</div>
                                </div>
                            </div>

                        ))}
                    </div>




                </div>

                {/* secton 4 */}

                <div className={styles.section4}  >

                    <div className={styles.chooseUsHeading}>
                        Why Choose Our Hotel and Room Booking Software?
                    </div>
                    <div className={styles.chooseUsSubHeading}>
                        {/* Experience Hassle-Free Reservations, Optimized Room Management, and Increased Revenue with Our Hotel and Room Booking Software – Tailored to Meet the Unique Needs of Your Hospitality Business. */}
                    </div>

                    <div className={styles.chooseUsDescription}>
                        Whether you are managing a small boutique hotel or a large resort, our Hotel and Room Booking Software offers the perfect solution for efficient room management, real-time booking updates, and seamless guest experience.
                    </div>
                </div>

            </div>



        </>
    )
}

