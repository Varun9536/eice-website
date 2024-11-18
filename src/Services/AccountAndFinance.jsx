
import styles from "./styles/finance.module.css"

import mainImg from "../assets/services/finance/main.webp"
import f1 from "../assets/services/finance/f2.jpg"
import b1 from "../assets/services/vendor/f1.png"


import { useEffect, useState } from "react";

export default function AccountAndFinance() {



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
            heading: "Comprehensive Financial Management",
            description: "Manage accounts receivable, payable, taxation, balance sheets, and general ledger for streamlined financial processes.",
            img: f1,
            width: "700px"
        },
        {
            heading: "Real-Time Financial Data",
            description: "Access up-to-date financial data anytime, enabling data-driven decision-making for improved profitability.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Integrated Invoicing and Billing",
            description: "Automatically generate and customize invoices for various services, ensuring accuracy and branding consistency.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Tax Management and Compliance",
            description: "Automate tax calculations based on local and international regulations, ensuring smooth tax management and compliance.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Advanced Reporting and Analytics",
            description: "Create detailed reports on revenue, expenditures, and profit margins to make informed financial forecasts.",
            img: f1,
            width: "500px"
        },
        {
            heading: "Payment Gateway Integration",
            description: "Process payments securely and efficiently through integrated payment gateways, tracking transactions in real-time.",
            img: f1,
            width: "500px"
        }
    ];




    // const benifits = [
    //     {
    //         heading: "Enhanced Financial Visibility",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Time-Saving Automation",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Increased Accuracy and Compliance",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Seamless Integration",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Improved Cash Flow Management",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },

    //     {
    //         heading: "Data Security and Confidentiality",
    //         description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
    //         img: f1,
    //         width: "500px"



    //     },



    // ]

    const benefits = [
        {
          heading: "Financial Accuracy",
          description: "Minimize human errors in financial documentation, ensuring precise and reliable financial reporting."
        },
        {
          heading: "Operational Efficiency",
          description: "Automate financial tasks, reducing manual effort and allowing finance teams to focus on strategic objectives."
        },
        {
          heading: "Cost Control",
          description: "Monitor expenses, analyze spending, and optimize cost management for better financial health across departments."
        },
        {
          heading: "Compliance Assurance",
          description: "Ensure adherence to industry standards and tax regulations, preventing penalties and maintaining transparency."
        },
        {
          heading: "Improved Cash Flow Management",
          description: "Utilize real-time tracking and reporting to optimize cash flow, enhancing financial stability."
        },
        {
          heading: "Enhanced Decision Making",
          description: "Leverage financial insights for smarter decision-making, promoting business growth and strategic planning."
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
                            Accounts & Finances Management

                        </div>

                        <div className={styles.mainSubHeading}>
                            Our Accounts & Finances service is crafted to help businesses efficiently manage their financial records, streamline accounting processes, and gain a comprehensive view of their financial health. With a focus on accuracy, transparency, and compliance, we offer tailored solutions that cover everything from bookkeeping and payroll management to financial reporting and cost analysis.


                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={images[currentIndex]} alt="" />
                    </div>
                </div>



                {/* section2 */}
                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Key Features of Our Accounts & Finances Services

                    </div>

                    <div className={styles.section2SubHeading}>
                        Essential Tools for Financial Clarity, Accuracy, Strategic Business Growth, and Seamless Management of Your Financial Operations
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
                                    {/* <img src={item.img} alt="" /> */}
                                </div>



                            </div>

                        ))}



                    </div>



                </div>

                {/* section3   Features*/}

                <div className={styles.section3}>

                    <div className={styles.billingHeading}>
                        Benefits of Using Our Account and Finance Software

                    </div>

                    <div className={styles.billingSubHeading}>
                        Maximize Efficiency, Minimize Errors, and Gain Complete Financial Control with Our Account and Finance Software – A Comprehensive Solution for Streamlined Accounting and Smarter Decision-Making
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

                {/* secton 4 */}

                <div className={styles.section4}  >

                    <div className={styles.chooseUsHeading}>
                        Why Choose Our Account and Finance Software?
                    </div>
                    <div className={styles.chooseUsSubHeading}>
                        Experience Effortless Financial Management with Our Account and Finance Software, Designed to Streamline Operations, Ensure Compliance, and Provide Real-Time Insights for Smarter Decision-Making
                    </div>

                    <div className={styles.chooseUsDescription}>
                        Our Account and Finance Software is the ultimate solution for managing your organization's finances. From budgeting and invoicing to real-time reporting and tax compliance, our software offers everything you need to stay ahead in the dynamic financial landscape
                    </div>
                </div>

            </div>



        </>
    )
}
