import React from 'react'
import styles from "./styles/memberportal.module.css"

import mainImg from "../assets/services/member/main.webp"
import f1 from "../assets/services/member/f1.png"
import b1 from "../assets/services/member/b1.png"


import { useEffect, useState } from "react";


export default function MemberPortal() {

    const features = [
        {
            heading: "Customizable Dashboard",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: b1,
            width: "700px"



        },

        {
            heading: "Secure Document Storage",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: b1,
            width: "500px"

        },

        {
            heading: "Seamless Communication Tools",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: b1,
            width: "500px"
        },

        {
            heading: "Flexible Membership Management",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: b1,
            width: "500px"
        },

        {
            heading: "Resource Library & Knowledge Base",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: b1,
            width: "500px"
        },

        {
            heading: "Integrated Payment & Billing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: b1,
            width: "500px"
        },


    ]



    const benifits = [
        {
            heading: "Enhanced Member Engagement",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Streamlined Membership Management",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Improved Accessibility and Convenience",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Data Security and Privacy",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Real-Time Updates and Notifications",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Increased Member Retention",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
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
            <div className={`${styles.mainBox} font-manrope  bg-white text-manrope  pt-24 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
                <div className={styles.section1}>

                    <div className={styles.headingBox}>

                        <div className={styles.mainHeading}>
                            Empower Your Members with a Seamless, Customizable Portal Experience

                        </div>

                        <div className={styles.mainSubHeading}>
                            Our company's Member Portal Software, provide your members with a seamless and intuitive experience that offers easy access to resources, secure data management, and personalized communication. Empower your team to efficiently manage memberships, enhance engagement, and build lasting relationships through a customizable platform designed to meet your business’s unique needs


                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Key Features of Our Member Portal Software

                    </div>

                    <div className={styles.section2SubHeading}>
                        Discover the Tools That Transform Member Interactions and Streamline Access to Essential Services
                    </div>


                    <div className={styles.featuresBox}>


                        {features.map((item) =>
                        (
                            <div className={styles.featuresAndImg}>

                                <div >
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

                    <div className={styles.billingHeading}>
                        Benefits of Using Our Member Portal Software

                    </div>

                    <div className={styles.billingSubHeading}>
                        Unlock Seamless Member Management, Enhance Engagement, and Drive Satisfaction with Our Feature-Rich Member Portal Software – Designed to Simplify Operations and Foster Stronger Connections
                    </div>

                    <div className={styles.billingBox}>
                        {benifits.map((item) =>
                        (
                            <div className={styles.billingDescriptionBox}>


                                <div>
                                    <img style={{ width: "700px" }} src={item.img} alt="" />
                                </div>

                                <div className={styles.summaryDescription}>
                                    <div className={styles.billingDescriptionHeading}>{item.heading}</div>
                                    <div className={styles.billingDescriptionSubHeading}>{item.description}</div>
                                </div>
                            </div>

                        ))}
                    </div>




                </div>

                {/* secton 4 */}

                <div className={styles.section4}  >

                    <div className={styles.chooseUsHeading}>
                        Why Choose Our Member Portal Software?
                    </div>
                    <div className={styles.chooseUsSubHeading}>
                        Experience a Seamless, Secure, and Personalized Member Management Solution that Enhances Engagement, Streamlines Operations, and Provides Real-Time Access to Essential Resources
                    </div>

                    <div className={styles.chooseUsDescription}>
                        Choosing us for purchase and vendor management ensures streamlined procurement, enhanced vendor relationships, and data-driven insights. Our flexible platform adapts to your unique needs, automating workflows to reduce costs and improve efficiency. We foster strong vendor collaboration and reliable partnerships, helping you optimize your supply chain and achieve strategic growth with a trusted, results-focused partner by your side.
                    </div>
                </div>

            </div>



        </>
    )
}

