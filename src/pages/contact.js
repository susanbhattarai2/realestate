import React from 'react'
import Nav from '../components/nav'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import map from "../assets/icon/map.png"
import phone from "../assets/icon/phone.png"
import mail from "../assets/icon/mail.png"
const Contact = () => {
  return (
    <>
    <Nav />
    
    <section
            className="bg-no-repeat bg-center bg-cover bg-[#FFF6F0] h-[350px] lg:h-[513px] xl:h-[650px] flex flex-wrap items-center relative before:absolute before:inset-0 before:content-[''] before:bg-[#000000] before:opacity-[70%]"
            // style="background-image: url('assets/images/breadcrumb/bg-1.png');"
            >
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="max-w-[700px]  mx-auto text-center text-white relative z-[1]">
                            <div className="mb-5"><span className="text-base block">Contact us</span></div>
                            <h1
                                className="font-recoleta text-[32px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl">
                                Contact Information
                            </h1>

                            <p className="text-base mt-5 max-w-[500px] mx-auto text-center">
                                Huge number of propreties availabe here for buy and sell
                                also you can find here co-living property as you like
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Hero section end --> */}
{/* 
        <!-- contact form start --> */}
        <section className="py-[80px] lg:py-[120px]">

            <div className="container">
                <div className="grid grid-cols-12 gap-x-[30px]">
                    <div className="col-span-12">
                        <div className="col-span-12 mb-[70px]">
                            <div className="text-center">
                                <span className="text-secondary text-tiny inline-block mb-2">Contact us</span>
                                <h2
                                    className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl capitalize mb-[5px]">
                                    Get in Touch<span className="text-secondary">.</span></h2>
                                <p className="mx-auto max-w-[465px]">
                                    Huge number of propreties availabe here for buy, sell and Rent.
                                    Also you find here co-living property, lots opportunity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid col-span-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] mb-[-30px]">

                    <div className="flex flex-wrap hover: drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8] transition-all p-[20px] xl:p-[35px] rounded-[8px] mb-[30px]">
                        <img className="self-center mr-[20px] sm:mr-[40px] lg:mr-[20px] xl:mr-[40px] sm:mb-[15px] lg:mb-0" src={map} width="40" height="55"
                            loading="lazy" alt="image icon"/>
                        <div className="flex-1">
                            <h4 className="font-recoleta leading-none text-[28px] text-primary mb-[10px]">Address <span
                                    className="text-secondary">.</span></h4>
                            <p className="font-light text-[18px] lg:max-w-[230px]">2104 Charmaine Lane
                                Amarillo, New York</p>
                        </div>
                    </div>

                    <div
                        className="flex flex-wrap hover: drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8] transition-all p-[20px] xl:p-[35px] rounded-[8px] mb-[30px]">
                        <img className="self-center mr-[20px] sm:mr-[40px] lg:mr-[20px] xl:mr-[40px] sm:mb-[15px] lg:mb-0" src={phone} width="46" height="46"
                            loading="lazy" alt="image icon"/>
                        <div className="flex-1">
                            <h4 className="font-recoleta leading-none text-[28px] text-primary mb-[10px]">Call us <span
                                    className="text-secondary">.</span></h4>
                            <p className="font-light text-[18px] lg:max-w-[230px]">2104 Charmaine Lane
                                Amarillo, New York</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap hover: drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8] transition-all p-[20px] xl:p-[35px] rounded-[8px] mb-[30px] xl:pl-[65px]">
                        <img className="self-center mr-[20px] sm:mr-[40px] lg:mr-[20px] xl:mr-[40px] sm:mb-[15px] lg:mb-0" src={mail} width="46" height="52"
                            loading="lazy" alt="image icon"/>
                        <div className="flex-1">
                            <h4 className="font-recoleta leading-none text-[28px] text-primary mb-[10px]">Email us <span
                                    className="text-secondary">.</span></h4>
                            <p className="font-light text-[18px] lg:max-w-[230px]">
                                <a href="mailto:admin@examples.com" className="hover:text-secondary"> admin@examples.com</a>
                                <a href="mailto:info@examples.com" className="hover:text-secondary"> info@examples.com</a>
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </section>
        {/* contactform section */}
        <div>
            <div className="container">
                <form id="contact-form" action="assets/php/contact.php" method="post">
                    <div className="grid grid-cols-12 gap-x-[30px] mb-[-30px] items-end">
                        <div className="col-span-12 lg:col-span-7 mb-[30px]">
                            <div>
                                <h2
                                    className="font-recoleta text-primary text-[24px] sm:text-[28px] leading-[1.277] capitalize mb-[10px]">
                                    Send Message
    
                                </h2>
                                <p className="max-w-[465px] mb-[40px]">
                                    Huge number of propreties availabe here for buy, sell and Rent.
                                    Also you find here co-living property, lots opportunity
                                </p>
                            </div>
                            <div className="grid grid-cols-12 gap-x-[20px] gap-y-[30px]">
    
                                <div className="col-span-12 md:col-span-6">
                                    <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="text" placeholder="First Name" name="name"/>
                                </div>
                            
                               <div className="col-span-12 md:col-span-6">
                                <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="text" placeholder="Last Name" name="name"/>
                               </div>
                            
                               <div className="col-span-12 md:col-span-6">
                                <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="text" placeholder="Phone number" name="number"/>
                               </div>
                            
                               <div className="col-span-12 md:col-span-6">
                                <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="email" placeholder="Email Address" name="email"/>
                               </div>
                            
                               <div className="col-span-12">
                                <textarea className="h-[196px] font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] resize-none" name="message" id="textarea" cols="30" rows="10" placeholder="Message"></textarea>
                               </div>
                            
                              
                            </div>
                        </div>
                        {/* <div className="col-span-12 lg:col-span-5 mb-[30px] order-last lg:order-none">
                            <div className="h-[385px] rounded-[6px] overflow-hidden xl:ml-[40px]">
                                <iframe
                                className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4814229.011985735!2d-65.89121968758322!3d-7.7486900084225026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1644813708270!5m2!1sen!2sbd"
                                     style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div> */}
                        <div className="col-span-12 mb-[30px] lg:mb-0  order-2 lg:order-none">
                            <button type="submit" className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[30px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all mb-[30px] lg:mb-0">Contact us</button>
                            <p className="form-messege mt-3"></p>
                          </div>
                    </div>
                </form>
               
            </div>
        </div>
        {/* footer section */}
        <section className="pt-[80px] lg:pt-[120px]">
                    <div className="container">
                    <div className="grid grid-cols-1">
                    <div className="col-span">
                       <Newsletter />
                    </div>
                    </div>
                    </div>
                  </section>

                  {/* footer */}
                  <footer className="footer bg-[#ECFAF7] pt-[80px] lg:pt-[200px] pb-[80px] lg:pb-[110px] font-light bg-no-repeat"
            >
            <div className="container">
            <Footer />
            </div>
        </footer>
    </>
  )
}

export default Contact