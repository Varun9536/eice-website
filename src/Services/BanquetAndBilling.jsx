import styles from "./styles/billing.module.css"

import b1 from "../assets/services/banquet/b1.png"
import b2 from "../assets/services/banquet/b2.jpg"
import f1 from "../assets/services/banquet/f1.png"



import billing1 from "../assets/services/banquet/billing1.png"
import { useEffect, useState } from "react";

export default function BanquetAndBilling() {



    const features = [
        {
            heading: "Effortless Inventory Management",
            description: " Real-time tracking of stock levels, automatic low-stock alerts, and easy organization of products to minimize stock-outs and reduce wastage",
            img: f1,
            width: "500px"



        },

        {
            heading: "Secure, Flexible Payment Processing",
            description: "Accept payments from multiple sources (cash, credit cards, mobile payments) with end-to-end encryption to ensure customer data security",
            img: f1,
            width: "450px"

        },

        {
            heading: "Detailed Sales and Customer Insights",
            description: "Generate insightful reports on sales trends, customer preferences, and peak times, empowering businesses to make data-driven decisions",
            img: f1,
            width: "400px"
        },

        {
            heading: "Multi-Location Management",
            description: "Seamlessly manage multiple store locations from a single dashboard, with centralized control over inventory, pricing, and reporting",
            img: f1,
            width: "340px"
        },

        {
            heading: "User-Friendly Interface",
            description: "Intuitive design with easy navigation, ensuring a smooth learning curve for new users and efficiency for experienced operators",
            img: f1,
            width: "400px"
        },

        {
            heading: "Employee Management",
            description: "Track employee performance, manage shifts, and handle payroll efficiently, making workforce management simpler and more transparent",
            img: f1,
            width: "400px"
        },


    ]



    const billing = [
        {
            heading: "Billing Summary",
            description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
            img: billing1,
            width: "500px"



        },

        {
            heading: "Billing Summary",
            description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
            img: billing1,
            width: "500px"



        },

        {
            heading: "Billing Summary",
            description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
            img: billing1,
            width: "500px"



        },

        {
            heading: "Billing Summary",
            description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
            img: billing1,
            width: "500px"



        },

        {
            heading: "Billing Summary",
            description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
            img: billing1,
            width: "500px"



        },

        {
            heading: "Billing Summary",
            description: " A quick overview of your charges, deposits, and outstanding balance. This section provides a transparent breakdown of all costs associated with your event",
            img: billing1,
            width: "500px"



        },



    ]







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
            <div className={`${styles.mainBox} font-manrope  bg-white text-manrope  pt-24 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
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
                        {billing.map((item) =>
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
