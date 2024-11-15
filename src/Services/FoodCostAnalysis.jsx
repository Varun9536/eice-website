import styles from "./styles/foodcost.module.css"


import mainImg from "../assets/services/foodCost/foodcost.webp"
import f1 from "../assets/services/payroll/features2.jpg"

import { useEffect, useState } from "react";

export default function FoodCostAnalysis() {



    const features = [
        {
            heading: "Accurate Cost Tracking",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"



        },

        {
            heading: "Menu Pricing Optimization",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"

        },

        {
            heading: "Waste Management Insights",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "ALabor Cost Analysis",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Custom Recommendations",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },

        {
            heading: "Custom Recommendations",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
            img: f1,
            width: "500px"
        },


    ]



    const benifits = [
        {
            heading: "Improved Profit Margins",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Accurate Menu Pricing",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Improved Profit Margins",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Labor Cost Optimization",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Better Budgeting and Forecasting",
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
            <div className={`${styles.mainBox} font-manrope  bg-white text-manrope  pt-24 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
                <div className={styles.section1}>

                    <div className={styles.headingBox}>

                        <div className={styles.mainHeading}>
                        Food & Beverage Cost Analysis Service
                        </div>

                        <div className={styles.mainSubHeading}>
                        we offer comprehensive Food & Beverage Cost Analysis services to help businesses in the hospitality industry manage and reduce operational costs while maximizing profitability
                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                    Why Choose Our Food & Beverage Cost Analysis?
                    </div>

                    <div className={styles.section2SubHeading}>
                    Unlock Cost Savings, Improve Efficiency, and Boost Profitability with Expert Analysis
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
                    Benefits of Food & Beverage Cost Analysis
                    </div>

                    <div className={styles.billingSubHeading}>
                    Maximize Profitability, Efficiency, and Sustainability with Expert Cost Analysis
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
