import React from 'react'
import styles from "./styles/employeePortal.module.css"

import mainImg from "../assets/services/employee/employee.webp"
import f1 from "../assets/services/employee/f1.png"
import b1 from "../assets/services/employee/b1.png"


import { useEffect, useState } from "react";


export default function EmployeePortal() {

  // const features = [
  //   {
  //     heading: "Personalized Dashboard",
  //     description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
  //     img: f1,
  //     width: "700px"



  //   },

  //   {
  //     heading: "Seamless Communication Channels",
  //     description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
  //     img: f1,
  //     width: "500px"

  //   },

  //   {
  //     heading: "Secure Document Storage & Sharing",
  //     description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
  //     img: f1,
  //     width: "500px"
  //   },

  //   {
  //     heading: "Task and Project Management Tools",
  //     description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
  //     img: f1,
  //     width: "500px"
  //   },

  //   {
  //     heading: "Self-Service HR and Payroll Access",
  //     description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
  //     img: f1,
  //     width: "500px"
  //   },

  //   {
  //     heading: "Integrated Training and Development Modules",
  //     description: "Our system automates the entire payroll process, saving you time and reducing the risk of human errors. From salary calculations to deductions, everything is handled smoothly and accurately",
  //     img: f1,
  //     width: "500px"
  //   },


  // ]


  const features = [
    {
        heading: "Personal Information Management",
        description: "Employees can update contact details, emergency contacts, and tax information for accurate and up-to-date records.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Payroll and Compensation",
        description: "Employees can access payslips, track salary history, and view deductions and bonuses for full transparency.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Leave and Attendance Management",
        description: "Employees can submit leave requests, track attendance, and view leave balances for easier time-off management.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Training and Development",
        description: "Employees can explore training programs, track progress, and enroll in courses to enhance professional skills.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Document Access",
        description: "Employees can access important documents like policies, contracts, benefits, and company announcements for quick reference.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Performance Management",
        description: "Employees can track goals, review feedback, and collaborate with managers to set development plans for continuous improvement.",
        img: f1,
        width: "500px"
    },
];



  // const benifits = [
  //   {
  //     heading: "Enhanced Employee Engagement",
  //     description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
  //     img: b1,
  //     width: "500px"



  //   },

  //   {
  //     heading: "Increased Efficiency and Productivity",
  //     description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
  //     img: b1,
  //     width: "500px"



  //   },

  //   {
  //     heading: "Secure and Reliable Access",
  //     description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
  //     img: b1,
  //     width: "500px"



  //   },

  //   {
  //     heading: "Reduced Administrative Overload",
  //     description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
  //     img: b1,
  //     width: "500px"



  //   },

  //   {
  //     heading: "Real-Time Updates and Notifications",
  //     description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
  //     img: b1,
  //     width: "500px"



  //   },

  //   {
  //     heading: "Improved Employee Satisfaction and Retention",
  //     description: "By outsourcing payroll to us, you eliminate the need for in-house payroll management. This reduces administrative workload, allowing your team to focus on core business operations, while cutting down on overhead costs.",
  //     img: b1,
  //     width: "500px"



  //   },



  // ]


  const benefits = [
    {
        heading: "Improved Efficiency",
        description: "Reduces administrative work by centralizing HR services and allowing employees to manage their own data.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Enhanced Communication",
        description: "Ensures clear communication about company policies, events, and updates.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Employee Empowerment",
        description: "Increases engagement by giving employees control over their personal and professional information.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Transparency and Trust",
        description: "Promotes trust by providing full visibility into payroll, benefits, and performance.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Time Savings",
        description: "Automates HR processes, freeing up time for HR teams to focus on strategic tasks.",
        img: f1,
        width: "500px"
    },
    {
        heading: "Compliance and Security",
        description: "Ensures secure storage and compliance with data privacy regulations, protecting sensitive employee information.",
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
      <div className={`${styles.mainBox} font-manrope  bg-white text-manrope  pt-28 pb-12 px-2 lg:max-w-7xl w-screen mx-auto`}>
        <div className={styles.section1}>

          <div className={styles.headingBox}>

            <div className={styles.mainHeading}>
            Transform Your Workforce with a Centralized, Efficient Employee Portal

            </div>

            <div className={styles.mainSubHeading}>
            Streamline communication, enhance productivity, and empower your team with Employee Portal Software—your all-in-one solution for a connected, efficient, and engaged workforce.

            </div>


          </div>

          <div className={styles.mainImageBox}>
            <img className={styles.mainImage} src={images[currentIndex]} alt="" />
          </div>
        </div>



        {/* section2 */}
        <div className={styles.section2}>

          <div className={styles.section2Heading}>
          Key Features of Our Employee Portal Software
          </div>

          <div className={styles.section2SubHeading}>
          Discover the Tools That Transform Employee Interactions and Drive Productivity Across Your Organization
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

        {/* secton 4 */}

        <div className={styles.section4}  > 

          <div className={styles.chooseUsHeading}>
          Why Choose Our Employee Portal Software?
          </div>
          <div className={styles.chooseUsSubHeading}>
            Your Trusted Partner for Reliable, Efficient, and Insightful Vendor and Procurement Solutions
          </div>

          <div className={styles.chooseUsDescription}>
          Our Employee Portal Software is built to meet the needs of modern organizations, simplifying access to critical information, tools, and support. With secure document sharing, robust communication features, and an intuitive user experience, our platform enables your team to work smarter and stay connected across all departments
          </div>
        </div>

      </div>



    </>
  )
}

