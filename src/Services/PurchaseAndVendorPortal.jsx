import styles from "./styles/purchaseVendor.module.css"


import mainImg from "../assets/services/vendor/main.jpg"
import f1 from "../assets/services/vendor/b1.jpeg"
import b1 from "../assets/services/vendor/f1.png"


import { useEffect, useState } from "react";

export default function PurchaseAndVendorPortal() {



    const features = [
        {
            heading: "Centralized Vendor Management",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
         img: b1,
            width: "700px"



        },

        {
            heading: "Automated Purchase Orders",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
         img: b1,
            width: "500px"

        },

        {
            heading: "Real-Time Tracking and Status Updates",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
         img: b1,
            width: "500px"
        },

        {
            heading: "Inventory Integration",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
         img: b1,
            width: "500px"
        },

        {
            heading: "Cost Analysis & Reporting",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
         img: b1,
            width: "500px"
        },

        {
            heading: "Role-Based Access Control",
            description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
         img: b1,
            width: "500px"
        },


    ]



    const benifits = [
        {
            heading: "Improved Efficiency",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Enhanced Vendor Collaboration",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Cost Savings",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Data-Driven Decision Making",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Compliance & Risk Management",
            description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
            img: f1,
            width: "500px"



        },

        {
            heading: "Barcode Scanning Integration",
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
            <div className={`${styles.mainBox} font-manrope  bg-white text-manrope  pt-28 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
                <div className={styles.section1}>

                    <div className={styles.headingBox}>

                        <div className={styles.mainHeading}>
                        Purchase & Vendor Management Portal

                        </div>

                        <div className={styles.mainSubHeading}>
                        Our Purchase & Vendor Management Portal is designed to help businesses efficiently manage vendor relationships, track purchase orders, and optimize procurement processes. With real-time insights and automation tools, our portal simplifies purchasing workflows and enhances vendor collaboration, enabling you to make smarter, faster decisions
                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                    Key Features of Our Purchase & Vendor Portal

                    </div>

                    <div className={styles.section2SubHeading}>
                    Essential Tools to Streamline Procurement, Strengthen Vendor Relations, and Optimize Supply Chain Efficiency
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
                                    <img width={500} src={item.img} alt="" />
                                </div>



                            </div>

                        ))}



                    </div>



                </div>

                {/* section3   Features*/}

                <div className={styles.section3}>

                    <div className={styles.billingHeading}>
                    Features of Our Inventory Management Solutions

                    </div>

                    <div className={styles.billingSubHeading}>
                    Comprehensive Tools to Simplify, Track, and Optimize Your Inventory Effortlessly, Enhancing Accuracy, Reducing Costs, and Supporting Business Growth Across All Locations
                    </div>

                    <div className={styles.billingBox}>
                        {benifits.map((item) =>
                        (
                            <div className={styles.billingDescriptionBox}>


                                <div>
                                    <img style={{width  : "700px"}} src={item.img} alt="" />
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
                    Why Choose Us for Your Purchase & Vendor Management?
                    </div>
                    <div  className={styles.chooseUsSubHeading}>
                    Your Trusted Partner for Reliable, Efficient, and Insightful Vendor and Procurement Solutions
                    </div>

                    <div className={styles.chooseUsDescription}>
                    Choosing us for purchase and vendor management ensures streamlined procurement, enhanced vendor relationships, and data-driven insights. Our flexible platform adapts to your unique needs, automating workflows to reduce costs and improve efficiency. We foster strong vendor collaboration and reliable partnerships, helping you optimize your supply chain and achieve strategic growth with a trusted, results-focused partner by your side.
                    </div>
                </div>

            </div>



        </>
    )
}
