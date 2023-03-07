import React from 'react';
import hero from "../assets/hero.jpg";
import location from "../assets/icon/location.svg";
import property from "../assets/icon/property.svg";
import dollar from "../assets/icon/dollar-circle.svg";
import area from "../assets/icon/area.svg";
import search from "../assets/icon/search-outline.svg";
const Hero = () => {
    return (
        <>
        <div class="relative">
            <section className="bg-[#FFF6F0] relative before:absolute before:inset-0 before:content-[''] before:bg-[#060606] before:opacity-[50%]">
                <div className="lg:h-[720px] xl:h-[830px]">
                    <img className="w-full h-full min-h-[360px] md:min-h-[540px] object-cover" src={hero} alt="hero image" />
                    <div className="absolute right-0 left-0 lg:top-[110px] xl:top-[155px] top-[50%] -translate-y-1/2 lg:translate-y-0">
                        <div className="container">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <div className="lg:max-w-[500px] xl:max-w-[600px] text-center ml-auto mr-auto lg:mb-[75px]">
                                        <span className="text-base text-white block mb-5">A new way to find Properties</span>
                                        <h1 className="font-recoleta text-white text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl title">
                                            Search and Find  Luxury Homes</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* advance search */}

            <div className="container mt-[80px] md:mt-[120px] lg:mt-[0px] z-[2] pl-[60px] lg:pl-[50px] 2xl::pl-[0px] lg:absolute lg:left-0 lg:right-0 lg:top-[100%] lg:translate-y-[-396px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="relative text-center">
                            <ul
                                className="tab-nav search-tab inline-flex px-[15px] sm:px-[30px] py-[22px] border-t border-l border-r border-solid border-[#016450] rounded-tl-[15px] rounded-tr-[15px] bg-[rgb(236,250,247,0.8)]">
                                <li data-tab="buy" className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 active"><button
                                    className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-31px] before:z-10 before:rounded-full before:w-0 before:h-[3px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">buy</button>
                                </li>
                                <li data-tab="sell" className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1"><button
                                    className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-31px] before:z-10 before:rounded-full before:w-0 before:h-[3px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">sell</button>
                                </li>
                                <li data-tab="rent" className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1"><button
                                    className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-31px] before:z-10 before:rounded-full before:w-0 before:h-[3px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">rent</button>
                                </li>
                                <li data-tab="co-living" className="md:mr-[0px] my-1"><button
                                    className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-31px] before:z-10 before:rounded-full before:w-0 before:h-[3px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">Co-living</button>
                                </li>
                            </ul>

                        </div>
                        <div className="relative selectricc-border-none">
                            <button
                                className="tab-toggle-btn px-[10px] py-[15px] absolute top-[0px] left-[-45px] border-l border-t border-b border-solid border-[#016450] bg-[rgb(236,250,247,0.8)] text-primary rounded-tl-[10px] rounded-bl-[10px]"
                                aria-label="svg icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 22V11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19 7V2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 22V17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 13V2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 22V11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 7V2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 11H7" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 11H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 13H14" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div id="buy"
                                className="tab-content bg-[rgb(236,250,247,0.8)] border border-solid border-[#016450] rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px] active">
                                <form action="#">
                                    <div className="advanced-searrch flex flex-wrap -mb-[45px]">

                                        <div
                                            className="advanced-searrch-list flex lg:border-r lg:border-primary lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                                            <div className="mr-4 self-start shrink-0">
                                                <img src={location} width="24" height="24"
                                                    alt="svg icon" />
                                            </div>
                                            <div className="flex-1">
                                                <label for="location"
                                                    className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1">Location</label>
                                                <input id="location" type="text" placeholder="Choose location"
                                                    className="text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full bg-transparent" />
                                            </div>
                                        </div>

                                        <div
                                            className="advanced-searrch-list flex lg:border-r lg:border-primary lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                                            <div className="mr-4 self-start shrink-0">
                                                <img src={property} width="24" height="24"
                                                    alt="svg icon" />
                                            </div>
                                            <div className="flex-1">
                                                <label for="property"
                                                    className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1">Property
                                                    Type</label>
                                                <select name="property" id="property"
                                                    className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                                                    <option selected value="0">Apartments</option>
                                                    <option value="1">Duplex House 1</option>
                                                    <option value="2">Duplex House 2</option>
                                                    <option value="3">Duplex House 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div
                                            className="advanced-searrch-list flex lg:border-r lg:border-primary lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                                            <div className="mr-4 self-start shrink-0">
                                                <img src={dollar} width="24" height="24"
                                                    alt="svg icon" />
                                            </div>
                                            <div className="flex-1">
                                                <label for="price"
                                                    className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1">Price
                                                    Range</label>
                                                <select name="price" id="price"
                                                    className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                                                    <option selected value="0">3500 USD</option>
                                                    <option value="1">3600 USD</option>
                                                    <option value="2">3700 USD</option>
                                                    <option value="3">3800 USD</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="advanced-searrch-list flex items-center lg:border-r lg:boprimaryborder-primaryD4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] relative">

                                            <div className="mr-4 self-start shrink-0">
                                                <img src={area} width="24" height="24"
                                                    alt="svg icon" />
                                            </div>

                                            <div className="flex-1">
                                                <label for="property-size"
                                                    className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1">Property
                                                    Size</label>
                                                <select name="property-size" id="property-size"
                                                    className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer">
                                                    <option selected value="0">1500 Sqft</option>
                                                    <option value="1">1600 Sqft</option>
                                                    <option value="2">1700 Sqft</option>
                                                    <option value="3">1800 Sqft</option>
                                                </select>
                                            </div>
                                            <button className="search-btn absolute right-0 lg:right-[-60px] xl:right-[-70px] bg-[#FF6500] p-3  rounded-xl">
                                                <img src={search}
                                                    className="max-w-[30px] xl:w-auto" width="40" height="40"
                                                    alt="svg icon" />
                                                <span className="hidden">Search Properties</span>
                                            </button>
                                        </div>
                                        
                                    </div>



                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            </div>

                {/* advance search */}



            </>
            )
}

            export default Hero