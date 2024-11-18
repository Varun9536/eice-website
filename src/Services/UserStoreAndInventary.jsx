import styles from "./styles/storeInventry.module.css"


import mainImg from "../assets/services/userstore/inventry.png"
import why1 from "../assets/services/userstore/w1.png"
import f1 from "../assets/services/userstore/f1.png"


import { useEffect, useState } from "react";

export default function UserStoreAndInventary() {



    // const features = [
    //     {
    //         heading: "Accuracy & Efficiency",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: why1,
    //         width: "700px"



    //     },

    //     {
    //         heading: "Cost Savings",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: why1,
    //         width: "500px"

    //     },

    //     {
    //         heading: "Customer Satisfaction",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: why1,
    //         width: "500px"
    //     },

    //     {
    //         heading: "Data-Driven Insights",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: why1,
    //         width: "500px"
    //     },

    //     {
    //         heading: "Scalability",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: why1,
    //         width: "500px"
    //     },

    //     {
    //         heading: "Custom Recommendations",
    //         description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
    //         img: why1,
    //         width: "500px"
    //     },


    // ]

    const features = [
        {
            heading: "Centralized User Management",
            description: "Streamline user access with customizable roles, permissions, and audit logs for improved security and operational oversight.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Efficient Store Management",
            description: "Manage multiple stores from one dashboard, tracking performance, inventory, and sales trends for optimized success.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Real-Time Inventory Control",
            description: "Get live updates on inventory levels with automated synchronization and low stock alerts to ensure smooth operations.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Comprehensive Product Catalog Management",
            description: "Maintain a consistent catalog with dynamic pricing and inventory updates, using barcode integration for quick product identification.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Advanced Reporting and Analytics",
            description: "Leverage real-time, customizable reports to gain valuable insights into sales, stock turnover, and user activities.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Multi-Location Support",
            description: "Manage multiple stores from a central platform, transfer stock between locations, and monitor regional inventory needs.",
            img: f1,
            width: "500px"
        },
        // {
        //     heading: "Seamless ERP Integration",
        //     description: "Sync data across your systems automatically, reducing manual data entry and enhancing operational efficiency.",
        //     img: f1,
        //     width: "500px"
        // }
    ];




    // const benifits = [
    //     {
    //         heading: "Real-Time Inventory Monitoring",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "User-Friendly Interface",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Automated Restocking Alerts",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Multi-Location Support",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Inventory Forecasting",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Barcode Scanning Integration",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },



    // ]

    const benefits = [
        {
          heading: "Operational Efficiency",
          description: "Reduce manual errors, accelerate processes, and free up resources for strategic tasks."
        },
        {
          heading: "Real-Time Insights",
          description: "Get instant visibility into inventory, store performance, and user activity to make faster decisions."
        },
        {
          heading: "Cost Optimization",
          description: "Automate restocking and inventory updates to minimize costs, prevent overstocking, and boost profit margins."
        },
        {
          heading: "Scalability",
          description: "Easily manage multiple locations as your business grows with customizable configurations and consistent performance."
        },
        {
          heading: "Improved Inventory Control",
          description: "Accurate, automated inventory management ensures real-time stock updates, enhancing the customer experience."
        },
        {
          heading: "Seamless Integration",
          description: "Integrate with ERP systems to eliminate manual entry and ensure smooth data flow across functions."
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
                            User Store & Inventory Management Solutions

                        </div>

                        <div className={styles.mainSubHeading}>
                            Our comprehensive User Store & Inventory Management solutions are designed to empower businesses of all sizes. With real-time tracking, intelligent analytics, and seamless multi-location management, we help you stay in control of your inventory, reduce costs, and enhance customer satisfaction.
                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Why Choose Us for Your Store & Inventory Management?
                    </div>

                    <div className={styles.section2SubHeading}>
                        Your Trusted Partner for Efficient, Scalable, Insightful, and Cost-Effective Inventory Solutions Tailored to Your Business Needs
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
                                    {/* <img width={500} src={item.img} alt="" /> */}
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
                        {benefits.map((item) =>
                        (
                            <div className={styles.billingDescriptionBox}>


                                <div>
                                    {/* <img style={{ width: "700px" }} src={item.img} alt="" /> */}
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
