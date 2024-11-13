import React from 'react'
import pos from "./styles/pos.module.css"
import pos1 from "../assets/pos/pos1.webp"
import pos2 from "../assets/pos/pos3.png"


import hotel from "../assets/pos/hotel.jpg"
import resturant from "../assets/pos/resturant.webp"
import hospital from "../assets/pos/hospital.jpg"
import retail from "../assets/pos/retail.webp"
import ecommerce from "../assets/pos/ecommerce.jpg"
import grocery from "../assets/pos/grocery.jpg"




import ui from "../assets/pos/feature/ui.png"
import inventry from "../assets/pos/feature/inventry.png"
import location from "../assets/pos/feature/location.png"
import payment from "../assets/pos/feature/payment.png"
import sales from "../assets/pos/feature/sales.png"
import emp from "../assets/pos/feature/emp.png"


export default function Pos() {

  let category = [
    {
      businessName: "Hotels",
      business: hotel,
      description: "Our POS system for hotels streamlines every guest interaction, from room service to restaurant orders. With features like integrated billing, reservation management, and multi-department tracking, you’ll have all the tools you need to deliver top-notch hospitality and increase efficiency."
    },

    {
      businessName: "Resturants",
      business: resturant,
      description: "Built for the fast-paced environment of restaurants, our POS solution ensures smooth order processing, efficient table management, and accurate billing. With kitchen display integration, real-time menu updates, and easy payment options, serve customers faster and keep them coming back"
    },

    {
      businessName: "Hospitals",
      business: hospital,
      description: "Our POS solution for hospitals streamlines the management of patient billing, pharmacy transactions, and departmental sales. From accurate patient invoicing to seamless inventory control for medical supplies, our system ensures smooth operations across various hospital departments"
    },

    {
      businessName: "Retail Shops",
      business: retail,
      description: "Designed for retail, our POS software supports everything from checkout speed to stock management. With features like barcode scanning, real-time inventory updates, and customer loyalty programs, you can provide a fast, personalized shopping experience that builds customer loyalty and maximizes sales"
    },

    {
      businessName: "Ecommerce",
      business: ecommerce,
      description: "An E-commerce POS system enables businesses to manage their entire sales process more effectively, offering a smooth integration between online and offline operations. It enhances efficiency, customer experience, and scalability, making it an essential tool for modern retailers looking to stay competitive in the digital marketplace"
    },
    {
      businessName: "Grocery Stores",
      business: grocery,
      description: "Our POS system for grocery stores is built to handle high volumes and varied products. With tools like bulk item management, self-checkout support, and dynamic pricing, you can offer a smooth checkout experience while managing inventory and reducing shrinkage effectively"
    }

  ]

  const features = [
    {
      heading: "Effortless Inventory Management",
      description: " Real-time tracking of stock levels, automatic low-stock alerts, and easy organization of products to minimize stock-outs and reduce wastage",
      img: inventry,
      width: "500px"



    },

    {
      heading: "Secure, Flexible Payment Processing",
      description: "Accept payments from multiple sources (cash, credit cards, mobile payments) with end-to-end encryption to ensure customer data security",
      img: payment,
      width: "450px"

    },

    {
      heading: "Detailed Sales and Customer Insights",
      description: "Generate insightful reports on sales trends, customer preferences, and peak times, empowering businesses to make data-driven decisions",
      img: sales,
      width: "400px"
    },

    {
      heading: "Multi-Location Management",
      description: "Seamlessly manage multiple store locations from a single dashboard, with centralized control over inventory, pricing, and reporting",
      img: location,
      width: "340px"
    },

    {
      heading: "User-Friendly Interface",
      description: "Intuitive design with easy navigation, ensuring a smooth learning curve for new users and efficiency for experienced operators",
      img: ui,
      width: "400px"
    },

    {
      heading: "Employee Management",
      description: "Track employee performance, manage shifts, and handle payroll efficiently, making workforce management simpler and more transparent",
      img: emp,
      width: "400px"
    },


  ]


  const chooseUsdescription = [
    {
      key: "Tailored for Your Business",
      value: "Scalable solutions for any business size, from small cafes to large enterprises"
    },

    {
      key: "Tailored for Your Business",
      value: "Scalable solutions for any business size, from small cafes to large enterprises"

    },

    {
      key: "Tailored for Your Business",
      value: "Scalable solutions for any business size, from small cafes to large enterprises"
    },

    {
      key: "Tailored for Your Business",
      value: "Scalable solutions for any business size, from small cafes to large enterprises"
    },

    {
      key: "Tailored for Your Business",
      value: "Scalable solutions for any business size, from small cafes to large enterprises"
    },

    {
      key: "Tailored for Your Business",
      value: "Scalable solutions for any business size, from small cafes to large enterprises"
    },
  ]

  const handleScroll = () => {
    document.getElementById('target-section').scrollIntoView({
      behavior: 'smooth',  // Smooth scrolling
    });
  };

  return (
    <>


      <div className={`${pos.mainContainer} font-manrope`}>

        <div className={`${pos.section1}`}>


          <div className={`${pos.description}`} >

            <div className={`${pos.heading}`}>
              Streamline Your Business with Our POS Software
            </div>

            <div className={`${pos.subheading}`}>
              Our advanced POS software is designed to streamline operations for hotels, restaurants, bars, car parking facilities, shops, and grocery stores. Experience seamless management and enhanced customer service with a solution that adapts to your business needs. <span style={{ color: "#01b0f1", fontSize: "14px" }}><a href="">Learn More</a></span>
            </div>

            <div>
              <button onClick={handleScroll} className={`${pos.demoBtn}`} >
                Request a Demo
              </button>
            </div>

          </div>


          <div className={`${pos.image}`}>
            <img src={pos2} alt="" />
          </div>
        </div>


        {/* section 2 */}
        <div className={`${pos.section2}`}>


          <div className={`${pos.section2IntroHeading} `}>Introduction</div>

          <div className={`${pos.section2Heading}`}>
            One POS Solution for All Your Needs
          </div>

          <div className={`${pos.section2Description}`}>
            Boost productivity, reduce complexity, and improve customer satisfaction with a POS system that’s designed for every aspect of your business. Whether it's real-time reporting or multi-location support, we provide the tools you need to succeed.
            Our POS software is crafted to support and simplify daily operations, from checkout to inventory tracking. Experience a flexible, reliable, and efficient system that drives growth for businesses of all types
          </div>

          <div className={`${pos.section2BusinessCategory}`}>



            {category.map((item) =>
            (
              <div style={{ backgroundImage: `url(${item.business})`, backgroundSize: 'cover' }} className={`${pos.UtiliyClass1}`}>

                <div className={`${pos.bussinessDescription}`}>

                  <div className={pos.bussinessPlaces}>{item.businessName}</div>
                  <div className={pos.bussinessBriefDescription}> {item.description}</div>
                </div>



              </div>
            ))}


          </div>

        </div>


        {/* section3 */}

        <div className={pos.section3}>

          <div className={`${pos.section3Heading}`} > Key Features</div>
          <div className={`${pos.section3SubHeading}`} >Unlock powerful tools designed to elevate your business operations and enhance customer experiences</div>

          <div className={pos.featureDescription}>

            {features.map((item) =>
            (



              <div style={{ display: "flex" }} className={pos.descriptionDiv}>

                <div >
                  <div style={{ fontSize: "24px", fontWeight: "600", marginBottom: "10px" }}>{item.heading}</div>
                  <div> {item.description}</div>
                </div>


                <div>
                  <img style={{ width: `${item.width}`, height: `${item.height}` }} src={item.img} alt="" />
                </div>

              </div>

            ))}



          </div>

        </div>

        {/* section 4 */}


        {/* <div className={pos.section4}>

          <div className={pos.section4Heading}>Why to choose us ?</div>
          <div className={pos.section4SubHeading}>Your business deserves the best. Here’s why we stand out</div>

          <div className={pos.chooseUsDescription}>

            {chooseUsdescription.map((item) =>
            (

              <div>
                <span></span>
                <span style={{fontSize : "20px" , fontWeight : "600"}}>{item.key} : </span>
                <span style={{fontSize : "15px" , fontWeight : "550"}}>{item.value}</span>
              </div>
            ))}

          </div>

        </div> */}




        <div id='target-section' className={`${pos.demoFormSection}`}>


          <div className={pos.formHeading}>Schedule a free demo</div>
          <div className={pos.formSubHeading}>Get in touch with our team to clarify your queries</div>


          <div className={pos.form}>
            <form action="">

              <div className={pos.divInput}>
                <input style={{ padding: "7px", borderRadius: "10px" }} type="text" id='name' name='Name' placeholder='Name' />
              </div>

              <div className={pos.divInput}>

                <input style={{ padding: "7px", borderRadius: "10px" }} type="email" id='email' name='Email' placeholder='Email' />
              </div>

              <div className={pos.divInput}>

                <input style={{ padding: "7px", borderRadius: "10px" }} type="tel" id='contact' name='contact' placeholder='Contact No' />
              </div>

              <div className={pos.divInput}>
                <input style={{ padding: "7px", borderRadius: "10px" }} type="text" id='city' name='city' placeholder='City' />
              </div>

              <div >
                <select
                  id="businessType"
                  name="businessType"
                  required
                  style={{ borderRadius: "10px", padding: "7px" }}
                >
                  <option value="">Select Business Type</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Bar">Bar</option>
                  <option value="Car Parking">Car Parking</option>
                  <option value="Shop">Shop</option>
                  <option value="Grocery Store">Grocery Store</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div >


                <div>

                  <textarea
                    id="message"
                    name="message"
                    style={{
                      marginTop: "20px",
                      borderRadius: "10px",
                      height: "80px",
                      padding: "10px"
                    }}

                    placeholder="Any specific requirements?"
                  ></textarea>
                </div>

              </div>

              <div id='target-section'>
                <button className={`${pos.demoBtnSubmit}`} >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>




      </div>


    </>
  )
}
