import styles from "./styles/payroll.module.css"

// import mainImg from "../assets/services/payroll/mainPayroll.jpg"
import mainImg from "../assets/services/payroll/payrollMain.webp"
import f1 from "../assets/services/payroll/features2.jpg"

import { useEffect, useState } from "react";

export default function Payroll() {



    const features = [
        {
            heading: "Automated Payroll Processing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"



        },

        {
            heading: "Automated Payroll Processing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"

        },

        {
            heading: "Automated Payroll Processing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Automated Payroll Processing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Automated Payroll Processing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Automated Payroll Processing",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },


    ]



    const benifits = [
        {
            heading: "Time and Cost Savings",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Time and Cost Savings",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Time and Cost Savings",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Time and Cost Savings",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Time and Cost Savings",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Time and Cost Savings",
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
            <div className={`${styles.mainBox} font-manrope  bg-white text-manrope  pt-32 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
                <div className={styles.section1}>

                    <div className={styles.headingBox}>

                        <div className={styles.mainHeading}>
                            Comprehensive Payroll Solutions for Your Business
                        </div>

                        <div className={styles.mainSubHeading}>
                            Experience the most efficient, accurate, and timely payroll services that cater to businesses of all sizes, from small startups to large enterprises. Our solutions are designed to streamline your payroll processes, ensuring seamless integration, error-free calculations, and on-time payments while maintaining full compliance with ever-changing tax regulations
                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Our Key Payroll Features
                    </div>

                    <div className={styles.section2SubHeading}>
                        Essential and Comprehensive Features That Power Our Reliable and Seamless Payroll Solution for Businesses of All Sizes
                    </div>


                    <div className={styles.featuresBox}>


                        {features.map((item) =>
                        (
                            <div className={styles.featuresAndImg}>

                                <div >

                                    <div className={styles.featuresHeading}>{item.heading}</div>
                                    <div className={styles.featuresDescription}>{item.description}</div>

                                </div>

                                <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                    <img src={item.img} alt="" />
                                </div>



                            </div>

                        ))}



                    </div>



                </div>

                {/* section3 */}

                <div className={styles.section3}>

                    <div className={styles.billingHeading}>
                    Benefits of Outsourcing Payroll to Us
                    </div>

                    <div className={styles.billingSubHeading}>
                    Unlock Efficiency, Compliance, and Cost Savings by Outsourcing Your Payroll to Us
                    </div>

                    <div className={styles.billingBox}>
                        {benifits.map((item) =>
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
