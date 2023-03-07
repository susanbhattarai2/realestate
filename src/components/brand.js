import React from 'react'
import brand from "../assets/brand/brand1.png"
const Brand = () => {
  return (
   <>

<section className="brand-section pt-[80px] lg:pt-[120px]">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="mb-[60px]">
                            <span className="text-secondary text-tiny inline-block mb-2">Our Partner’s</span>
                            <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                                Reliable Partner’s<span className="text-secondary">.</span></h2>
                        </div>
                        <div className="brand-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper flex ">
                                   
                                    <div class="swiper-slide text-center">
                                        <a href="#" class="block">
                                        <img src={brand} class="w-auto h-auto block mx-auto" loading="lazy" width="125" height="109" alt="" />
                                        </a>
                                    </div>

                                    <div class="swiper-slide text-center">
                                        <a href="#" class="block">
                                        <img src={brand} class="w-auto h-auto block mx-auto" loading="lazy" width="125" height="109" alt="" />
                                        </a>
                                    </div>

                                    <div class="swiper-slide text-center">
                                        <a href="#" class="block">
                                        <img src={brand} class="w-auto h-auto block mx-auto" loading="lazy" width="125" height="109" alt="" />
                                        </a>
                                    </div>

                                    <div class="swiper-slide text-center">
                                        <a href="#" class="block">
                                        <img src={brand} class="w-auto h-auto block mx-auto" loading="lazy" width="125" height="109" alt="" />
                                        </a>
                                    </div>

                            
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

   </>
  )
}

export default Brand