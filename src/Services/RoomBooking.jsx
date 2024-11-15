import React from 'react'
import styles from "./styles/roomBooking.module.css"

import mainImg from "../assets/services/room/room.png"
import f1 from "../assets/services/room/f1.png"
import b1 from "../assets/services/room/b1.png"


import { useEffect, useState } from "react";


export default function RoomBooking() {

    const features = [
        {
            heading: "Comprehensive Financial Tracking",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "700px"



        },

        {
            heading: "Automated Invoicing and Billing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"

        },

        {
            heading: "Real-Time Financial Reports",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Budgeting & Forecasting",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Tax Compliance and Filing Support",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Cash Flow Management",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },


    ]



    const benifits = [
        {
            heading: "Improved Efficiency",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: b1,
            width: "500px"



        },

        {
            heading: "Enhanced Vendor Collaboration",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: b1,
            width: "500px"



        },

        {
            heading: "Cost Savings",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: b1,
            width: "500px"



        },

        {
            heading: "Data-Driven Decision Making",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: b1,
            width: "500px"



        },

        {
            heading: "Compliance & Risk Management",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: b1,
            width: "500px"



        },

        {
            heading: "Barcode Scanning Integration",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: b1,
            width: "500px"



        },



    ]



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
                        treamline your hotel operations with our advanced booking software, designed to optimize room management, enhance customer experience, and increase revenue through real-time booking, dynamic pricing, and automation

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
                                    <img style={{maxWidth : "80%"}} src={item.img} alt="" />
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
                        {benifits.map((item) =>
                        (
                            <div className={styles.benifitsDescriptionBox}>


                                <div>
                                    <img style={{ width: "700px" }} src={item.img} alt="" />
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

