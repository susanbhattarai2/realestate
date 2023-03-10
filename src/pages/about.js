import React from 'react'
import Nav from '../components/nav';
import Counter from '../components/counter'
import Service from '../components/service';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import Newsletter from '../components/newsletter';
import aboutimage from "../assets/about/image1.png"
import aboutimage1 from "../assets/about/image2.png"
import aboutimage2 from "../assets/about/image3.png"
import location from "../assets/icon/location.svg";
import dollar from "../assets/icon/dollar-circle.svg";
import trusted from "../assets/icon/trusted.png";
import testimonialdots from "../assets/testimonial/dots.png"

const About = () => {
  return (
    <>
      <Nav />
      {/* herosection */}
      <section className="bg-no-repeat bg-center bg-cover bg-[#FFF6F0] h-[350px] lg:h-[513px] xl:h-[650px] flex flex-wrap items-center relative before:absolute before:inset-0 before:content-[''] before:bg-[#000000] before:opacity-[70%]">
        {/* style="background-image: url('assets/images/breadcrumb/bg-1.png'); */}
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="max-w-[480px]  mx-auto text-center text-white relative z-[1]">
                <div className="mb-5"><span className="text-base block">About us</span></div>
                <h1
                  className="font-recoleta text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl">
                  About Realestate.
                </h1>

                <p className="text-base mt-5">
                  Huge number of propreties availabe here for buy
                  and sell, also you can find here co-living property
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* aboutsection */}
      <section className="pt-[80px] lg:pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-[15px] sm:gap-x-[20px] mb-[-40px]">

            <div className="col-span-12 md:col-span-5 lg:col-span-5 mb-[40px]">
              <img className="w-full h-full rounded-[6px]" src={aboutimage} width="470" height="370" alt="about image" />
            </div>

            <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:px-[50px] mb-[40px]">
              <span className="text-secondary text-tiny inline-block mb-2">Since 1975</span>
              <h2
                className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.388] xl:text-[35px] capitalize mb-[15px] lg:mb-[50px]">
                We Provide Right Choice of
                Properties that You need and have
                great opportunity to choose from
                thousands of Collection
                <span className="text-secondary">.</span></h2>

              <Counter />
            </div>

            <div className="col-span-12 md:col-span-12 lg:col-span-5 mb-[40px]">
              <div className="-mb-5 xl:-mb-10 mt-0 xl:mt-[35px]">
                <div className="flex flex-wrap mb-5 xl:mb-10">
                  <img src={dollar} className="self-start mr-5" loading="lazy" alt="about Image" width="50" height="50" />
                  <div className="flex-1">
                    <h3 className="font-recoleta text-primary text-[22px] xl:text-lg capitalize mb-2">Budget
                      Friendly</h3>
                    <p className="max-w-[340px]">Properties are most budget friendly so you
                      have opportunity to find the best one</p>
                  </div>

                </div>
                <div className="flex flex-wrap mb-5 xl:mb-10">
                  <img src={location} className="self-start mr-5" alt="about Image" width="50" height="50" />
                  <div className="flex-1">
                    <h3 className="font-recoleta text-primary text-[22px] xl:text-lg capitalize mb-2">Prime
                      Location</h3>
                    <p className="max-w-[340px]">Properties are most budget friendly so you
                      have opportunity to find the best one</p>
                  </div>

                </div>
                <div className="flex flex-wrap mb-5 xl:mb-10">
                  <img src={trusted} className="self-start mr-5" loading="lazy" alt="about Image" width="50" height="50" />
                  <div className="flex-1">
                    <h3 className="font-recoleta text-primary text-[22px] xl:text-lg capitalize mb-2">
                      Trusted by
                      Thousand</h3>
                    <p className="max-w-[340px]">Properties are most budget friendly so you
                      have opportunity to find the best one</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-span-7 lg:col-span-4 mb-[40px]">
              <img className="w-full h-full rounded-[6px]" src={aboutimage1}  width="350" height="420" alt="about image"/>
            </div>

            <div className="col-span-5 lg:col-span-3 mb-[40px]">
              <img className="w-full h-full rounded-[6px]" src={aboutimage2}  width="300" height="420" alt="about image"/>
            </div>

          </div>
        </div>
      </section>
      {/* servicesection */}
      <section className="pt-[80px] pb-[120px] lg:py-[120px]">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="mb-[30px] lg:mb-[60px] text-center">
                            <span className="text-secondary text-tiny inline-block mb-2">Our Services</span>
                            <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                                Services that we Provide<span className="text-secondary">.</span></h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
        </section>
        {/* testimonials */}
        <section className="testimonial-section pb-[80px] lg:pb-[120px] bg-center bg-no-repeat bg-white z-10">
    <div className="container testimonial-carousel-two relative">
        <div className="scene dots-shape absolute left-0">
            <img data-depth="0.4" className="z-[1]" src={testimonialdots} width="106"
                height="129" loading="lazy" alt="shape"/>
        </div>
        <div className="grid items-center grid-cols-12 gap-x-[30px]">
            <div className="col-span-12 relative">
                <div className="swiper rounded-[30px] pb-[40px] md:pb-0">
                    <div className="swiper-wrapper">
                        <Testimonial />
                    </div>
                    {/* <!-- If we need navigation buttons -->
                    <div className="testimonial-pagination hidden sm:block">
                        <div
                            className="swiper-button-prev w-[36px] h-[36px] rounded-full bg-secondary xl:bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[30px]">
                        </div>
                        <div
                            className="swiper-button-next w-[36px] h-[36px] rounded-full bg-secondary xl:bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[85px]">
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    </div>
</section>
{/* footersection */}
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

export default About