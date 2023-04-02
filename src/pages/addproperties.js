import React from 'react'
import Nav from '../components/nav'
import Formadd from '../components/formadd'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
const Addproperties = () => {
  return (
    <>
    <Nav />

<section
            className="bg-no-repeat bg-center bg-cover bg-[#FFF6F0] h-[350px] lg:h-[513px] xl:h-[650px] flex flex-wrap items-center relative before:absolute before:inset-0 before:content-[''] before:bg-[#000000] before:opacity-[70%]"
            //</>style="background-image: url('assets/images/breadcrumb/bg-1.png');"
            >
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="max-w-[700px]  mx-auto text-center text-white relative z-[1]">
                            <div className="mb-5"><span className="text-base block">Property ADD</span></div>
                            <h1
                                className="font-recoleta text-[32px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl">
                                Add Property
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

        <div class="pt-[80px] lg:pt-[120px] add-properties-form-select">
            <div class="container">
                <Formadd />
            </div>
        </div>


        
        <section>
            <div className="container">
                <div className="grid grid-cols-12 gap-x-[30px] mb-[-45px]">

                    <div className="col-span-12 md:col-span-6 mb-[45px]">
                        <h3 className="mb-[40px] font-recoleta text-[18px] leading-none  text-primary">Property Aminities
                        </h3>
                        <form action="/action_page.php" method="get" className="custom-check">
                            <ul className="mb-[-30px] list-none text-[15px] lg:text-[16px] flex flex-wrap">
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox" name="checkbox" />
                                    <label for="checkbox">Air Conditioning</label>
                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox2" name="checkbox2" />
                                    <label for="checkbox2">Bedding</label>


                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox3" name="checkbox3" />
                                    <label for="checkbox3">Balcony</label>

                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox4" name="checkbox4" />
                                    <label for="checkbox4"> ACable TV</label>


                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox5" name="checkbox5" />
                                    <label for="checkbox5">Oven</label>

                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox6" name="checkbox6" />
                                    <label for="checkbox6">Internet</label>
                                </li>

                                <li className="mb-[30px] capitalize w-1/2">

                                    <input type="checkbox" id="checkbox7" name="checkbox7" />
                                    <label for="checkbox7">Parking</label>

                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox8" name="checkbox8" />
                                    <label for="checkbox8">Lift</label>

                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox9" name="checkbox9" />
                                    <label for="checkbox9">Pool</label>

                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox10" name="checkbox10" />
                                    <label for="checkbox10">Dishwasher</label>

                                </li>
                                <li className="mb-[30px] capitalize w-1/2">

                                    <input type="checkbox" id="checkbox11" name="checkbox11" />
                                    <label for="checkbox11"> Washing Machine</label>


                                </li>
                                <li className="mb-[30px] capitalize w-1/2">
                                    <input type="checkbox" id="checkbox12" name="checkbox12" />
                                    <label for="checkbox12">Toaster</label>

                                </li>


                            </ul>
                        </form>

                        <div className="mt-[50px] lg:mt-[80px]">
                            <button
                                className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[40px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all">
                                Add Property</button>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-[45px]">
                        <h3 className="mb-[40px] font-recoleta text-[18px] leading-none  text-primary">Place on Map
                        </h3>

                        <div className="h-[350px] rounded-[6px] overflow-hidden">
                            {/* <iframe className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4814229.011985735!2d-65.89121968758322!3d-7.7486900084225026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1644813708270!5m2!1sen!2sbd"
                                style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    {/* footer section------------------------- */}
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

export default Addproperties