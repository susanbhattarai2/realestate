import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Card from "../components/card"
import Video from "../components/video"
import Brand from "../components/brand"
import Footer from "../components/footer"
import Newsletter from '../components/newsletter'
const Home = () => {
  return (
    <>
          <Nav />
          <Hero />
          
          {/* FEATURED PRODUCT */}
                  <section className="featured-properties py-[80px] lg:py-[120px]">
                    <div className="container">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 flex flex-wrap flex-col md:flex-row md:items-center justify-between mb-[50px]">
                                <div className="mb-5 lg:mb-0">
                                    <span className="text-secondary text-tiny inline-block mb-2">Newly Added</span>
                                    <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                                        Featured
                                        Properties<span className="text-secondary">.</span></h2>
                                </div>
                                {/* <ul className="all-properties flex flex-wrap lg:pt-[10px]">
                                    <li data-tab="all-properties"
                                        className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none active"><button
                                            className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">All
                                            Properties</button></li>
                                    <li data-tab="ForBuy" className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"><button
                                            className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">For
                                            Buy</button></li>
                                    <li data-tab="ForSale" className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"><button
                                            className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">For
                                            Sale</button></li>
                                    <li data-tab="ForRent" className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"><button
                                            className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">For
                                            Rent</button></li>
                                    <li data-tab="co-living2" className="md:mr-[0px] mb-4 lg:mb-0 leading-none"><button
                                            className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">Co-living</button>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="col-span-12">
                                <div id="all-properties" className="properties-tab-content active">
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">

                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />    
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                  </section>   

                  {/* video section */}
                  <section class="video-section">
                      <div class="container">
                          <Video />
                      </div>
                  </section>
                  {/* brand section  */}
                  <Brand />

                  {/* newsletter */}
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

export default Home