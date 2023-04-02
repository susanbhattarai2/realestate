import React from 'react'
import Nav from '../components/nav'
import Form from '../components/form'
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';
import poster from '../assets/properties-details/post1.png'
import img1 from '../assets/properties-details/01.png'
import img2 from '../assets/properties-details/02.png'
import img3 from '../assets/properties-details/03.png'
import img4 from '../assets/properties-details/04.png'
import img5 from '../assets/properties-details/05.png'
import img6 from '../assets/properties-details/06.png'
import check from '../assets/about/check.png'
const Propertiesdetails
  = () => {
    return (
      <>
        <Nav />
        {/* ----------hero section start---------------- */}
        <section
          className="bg-no-repeat bg-center bg-cover bg-[#FFF6F0] h-[350px] lg:h-[513px] xl:h-[650px] flex flex-wrap items-center relative before:absolute before:inset-0 before:content-[''] before:bg-[#000000] before:opacity-[70%]"
        // style="background-image: url('assets/images/breadcrumb/bg-1.png');"
        >
          <div className="container">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="max-w-[600px]  mx-auto text-center text-white relative z-[1]">
                  <div className="mb-5"><span className="text-base block">Our Properties</span></div>
                  <h1
                    className="font-recoleta text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl">
                    Properties Details
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

        {/* ------------------herosectionend---------------- */}


        <section className="popular-properties py-[80px] lg:py-[120px]">
          <div className="container">

            <div className="grid grid-cols-12 mb-[-30px] gap-[30px] xl:gap-[50px]">
              <div className="col-span-12 md:col-span-6 lg:col-span-8 mb-[30px]">
                <img src={poster} className="w-auto h-auto" loading="lazy"
                  alt="Elite Garden Resedence." width="770" height="465" />
                <div className="mt-[45px] mb-[35px]">
                  <h2
                    className="font-recoleta leading-tight text-[22px] md:text-[28px] lg:text-[36px] text-primary mb-[5px]">
                    Ruposibangla de Parlosia.</h2>
                  <h3 className="font-light text-[18px] text-secondary underline mb-[20px]">2265 Paul Wayne
                    Haggerty Road, New Orleans</h3>
                  <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here
                    co-living property, lots
                    opportunity you have to choose here and enjoy huge discount you can get. These cases are
                    perfectly simpl
                    and easy to distinguish. In a free hour, when our power of choice is untrammelled and
                    when nothing prev
                    ents our being able to do what we like best, every pleasure is to be welcomed and every
                    pain avoided are
                    cases are perfectly simple and easy to distinguish. In a free hour, when our power of
                    choice</p>
                </div>

                <div
                  className="grid grid-cols-12 xl:flex xl:flex-wrap xl:justify-between gap-y-[30px] gap-x-[15px] xl:gap-x-[0px] mb-[30px]">
                  <div className="col-span-5">
                    <Link to="assets/images/properties-details/01.png" className="gallery-image">
                      <img className="object-cover w-full h-full rounded-[8px]"
                        src={img1} alt="galleryimage" loading="lazy"
                        width="270" height="187" />
                    </Link>

                  </div>
                  <div className="col-span-5">
                    <Link to="assets/images/properties-details/02.png" className="gallery-image">
                      <img className="object-cover w-full h-full rounded-[8px]"
                        src={img2} alt="galleryimage" loading="lazy"
                        width="270" height="187" />
                    </Link>

                  </div>
                  <div className="col-span-2">
                    <Link to="assets/images/properties-details/03.png" className="gallery-image">
                      <img className="object-cover w-full h-full rounded-[8px]"
                        src={img3} alt="galleryimage" loading="lazy"
                        width="170" height="187" />
                    </Link>

                  </div>

                  <div className="col-span-2">
                    <Link to="assets/images/properties-details/06.png" className="gallery-image">
                      <img className="object-cover w-full h-full rounded-[8px]"
                        src={img6} alt="galleryimage" loading="lazy"
                        width="270" height="187" />
                    </Link>

                  </div>
                  <div className="col-span-5">
                    <Link to="assets/images/properties-details/05.png" className="gallery-image">
                      <img className="object-cover w-full h-full rounded-[8px]"
                        src={img5} alt="galleryimage" loading="lazy"
                        width="270" height="187" />
                    </Link>

                  </div>
                  <div className="col-span-5">
                    <Link to="assets/images/properties-details/04.png" className="gallery-image">
                      <img className="object-cover w-full h-full rounded-[8px]"
                        src={img4} alt="galleryimage" loading="lazy"
                        width="170" height="187" />
                    </Link>

                  </div>
                </div>

                <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living
                  property, lots
                  opportunity you have to choose here and enjoy huge discount you can get. These cases are
                  perfectly simpl
                  and easy to distinguish. In a free hour, when our power of choice is untrammelled </p>


                <h4
                  className="font-recoleta text-primary text-[24px] leading-[1.277] sm:text-[28px] capitalize mt-[50px] mb-[40px]">
                  Property Amenities<span className="text-secondary">.</span>
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-[15px] mx-[-15px] mt-[40px]">
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>7 Beedrooms</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Gym for all</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Air Conditioning</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>CC Camera</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>3 Garaze</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Cable TV</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>10 Nearby Restaurant</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Internet</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Security System</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>10 Nearby Restaurant</span>
                  </li>

                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>6 Nearby Schools</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Gym for all</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Dishwasher</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>5 Balcony</span>
                  </li>
                  <li className="flex flex-wrap items-center mb-[25px]">
                    <img className="mr-[15px]" src={check} loading="lazy" alt="icon"
                      width="20" height="20" />
                    <span>Swimming Pool</span>
                  </li>
                </ul>


                <div className="col-span-12">
                  <h2 className="font-recoleta text-primary text-[24px] sm:text-[28px] capitalize">
                    Feedback<span className="text-secondary">.</span>
                  </h2>

                  <ul className="mt-[50px] lg:mt-[70px]">
                    <li
                      className="flex flex-wrap mb-[55px] sm:even:ml-[110px] md:even:ml-[0px] lg:even:ml-[110px] last:mb-0">
                      <img className="self-start mr-[35px] border border-primary rounded-[26px]"
                        src="assets/images/commentor/01.png" width="78" height="80" loading="lazy"
                        alt="comimage" />
                      <div className="flex-1">
                        <h4 className="text-primary font-recoleta text-[18px] leading-none mb-[5px]">
                          Stela Flemming, <span className="text-[14px] text-[#494949]">20 Jan,
                            2022</span> </h4>
                        <p>Bary do a great job to find the perfect home. It’s very easy for every
                          one to buy, sell
                          or rent property we belive they continure their great service and
                          appriciat.</p>
                        <p className="mt-[8px]">  <Link to="#"
                          className="inline-block mr-[10px] hover:text-secondary">Like </Link>  <Link
                            className="inline-block hover:text-secondary" to="#">Reply </Link></p>
                      </div>
                    </li>
                    <li
                      className="flex flex-wrap mb-[55px] sm:even:ml-[110px] md:even:ml-[0px] lg:even:ml-[110px] last:mb-0">
                      <img className="self-start mr-[35px] border border-primary rounded-[26px]"
                        src="assets/images/commentor/02.png" width="78" height="80" loading="lazy"
                        alt="comimage" />
                      <div className="flex-1">
                        <h4 className="text-primary font-recoleta text-[18px] leading-none mb-[5px]">
                          Shane Williamson, <span className="text-[14px] text-[#494949]">20 Jan,
                            2022</span> </h4>
                        <p>Bary do a great job to find the perfect home. It’s very easy for every
                          one to buy, sell
                          or rent property we belive they continure their great service and
                          appriciat.</p>
                        <p className="mt-[8px]">  <Link to="#"
                          className="inline-block mr-[10px] hover:text-secondary">Like </Link>  <Link
                            className="inline-block hover:text-secondary" to="#">Reply </Link></p>
                      </div>
                    </li>
                    <li
                      className="flex flex-wrap mb-[55px] sm:even:ml-[110px] md:even:ml-[0px] lg:even:ml-[110px] last:mb-0">
                      <img className="self-start mr-[35px] border border-primary rounded-[26px]"
                        src="assets/images/commentor/03.png" width="78" height="80" loading="lazy"
                        alt="comimage" />
                      <div className="flex-1">
                        <h4 className="text-primary font-recoleta text-[18px] leading-none mb-[5px]">
                          Shohel Buddy, <span className="text-[14px] text-[#494949]">20 Jan,
                            2022</span> </h4>
                        <p>Bary do a great job to find the perfect home. It’s very easy for every
                          one to buy, sell
                          or rent property we belive they continure their great service and
                          appriciat.</p>
                        <p className="mt-[8px]">  <Link to="#"
                          className="inline-block mr-[10px] hover:text-secondary">Like </Link>  <Link
                            className="inline-block hover:text-secondary" to="#">Reply </Link></p>
                      </div>
                    </li>
                  </ul>

                  <h2
                    className="font-recoleta text-primary text-[24px] sm:text-[28px] capitalize nt-[80px] lg:mt-[90px]">
                    Leave a Message<span className="text-secondary">.</span>
                  </h2>
                  <div className="mt-[60px]">
                    <Form />
                  </div>
                </div>

              

            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-[30px]">
              <Sidebar />
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

export default Propertiesdetails
