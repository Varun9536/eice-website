import styles from "./styles/payroll.module.css"

// import mainImg from "../assets/services/payroll/mainPayroll.jpg"
import mainImg from "../assets/services/payroll/payrollMain.webp"
import f1 from "../assets/services/payroll/features2.jpg"

import { useEffect, useState } from "react";

export default function Payroll() {



    // 

    const features = [
        {
            heading: "Automated Payroll Processing",
            description: "Streamlines salary calculations, deductions, bonuses, and taxes, ensuring accuracy and timely payroll processing.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Employee Data Management",
            description: "Centralizes employee records, including salary, benefits, taxes, and working hours, for easy access and accuracy.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Customizable Pay Structures",
            description: "Allows businesses to define various compensation models, such as hourly, salaried, or commission-based pay.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Tax Compliance and Reporting",
            description: "Automates tax calculations and generates reports to ensure compliance with local, state, and federal regulations.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Leave and Attendance Management",
            description: "Integrates with time tracking systems to manage leave, absences, and overtime for accurate payroll processing.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Direct Deposit and Payment Processing",
            description: "Enables direct deposit to employees' bank accounts, reducing manual payment processes and enhancing accuracy.",
            img: f1,
            width: "500px"
        }
    ];




    // const benifits = [
    //     {
    //         heading: "Time and Cost Savings",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Time and Cost Savings",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Time and Cost Savings",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Time and Cost Savings",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Time and Cost Savings",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Time and Cost Savings",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },



    // ]

    const benefits = [
        {
            heading: "Time Efficiency",
            description: "Automates payroll tasks, reducing manual effort and the time spent on calculating, processing, and distributing payroll.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Accurate Payroll Processing",
            description: "Reduces errors by automating calculations and ensuring compliance with tax laws, minimizing the risk of overpayments, underpayments, or compliance issues.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Improved Compliance",
            description: "Helps businesses stay up-to-date with changing tax regulations and labor laws, ensuring compliance and reducing legal risks.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Cost Savings",
            description: "By automating payroll and reducing errors, businesses can save on administrative costs and avoid costly penalties for non-compliance.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Employee Satisfaction",
            description: "Ensures timely and accurate payments, boosting employee trust and satisfaction.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Real-Time Insights",
            description: "Provides detailed reports on payroll, taxes, and labor costs, helping businesses make informed financial decisions and manage budgets effectively.",
            img: f1,
            width: "500px"
        },
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

                                <div style={{ display: "flex", justifyContent: "space-between" }} >

                                    <div className={styles.featuresHeading}>{item.heading}</div>

                                    <div style={{ display: "flex", justifyContent: "flex-end" }} >
                                        {/* <img style={{ maxWidth: "50%" }} src={item.img} alt="" /> */}
                                    </div>

                                </div>



                                <div className={styles.featuresDescription}>{item.description}</div>

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
                        {benefits.map((item) =>
                        (
                            <div className={styles.billingDescriptionBox}>


                                <div>
                                    {/* <img src={item.img} alt="" /> */}
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
