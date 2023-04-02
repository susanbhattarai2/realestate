import React from 'react';
import avater from '../assets/avater.png';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <>
           <div className="container">
    <div className="grid grid-cols-12">
        <div className="col-span-12">
            <div className="flex flex-wrap items-center justify-between">
                <Link to ="/" className="block">
                    <img className="w-full h-full" src="assets/images/logo/logo.svg" loading="lazy" width="99" height="46" alt="brand logo"/>
                </Link>
                <nav className="flex flex-wrap items-center">
                <ul className="hidden lg:flex flex-wrap items-center font-recoleta text-[16px] xl:text-[18px] leading-none text-black">
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">

                        <Link to ="/" className="transition-all hover:text-secondary">Home</Link>

                        
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">

                        <Link to ="/about" className="transition-all hover:text-secondary">About</Link>


                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">

                        <Link to ="/properties" className="transition-all hover:text-secondary">Properties</Link>
                        
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">

                        <Link to ="/contact" className="transition-all hover:text-secondary">Contact</Link>
                        
                    </li>
                   
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">

                        <Link to ="/blog" className="transition-all hover:text-secondary">Blog</Link>
                        

                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">

                        <Link to ="/contact-us" className="transition-all hover:text-secondary">Service</Link>

                    </li>
                </ul>

                <ul className="flex flex-wrap items-center">
                    <li className="sm:mr-5 xl:mr-[20px] relative group"><Link to ="#">
                        <img src={avater} loading="lazy" width="62"
                            height="62" alt="avater"/>
                    </Link>

                        <ul className="list-none bg-white drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] rounded-[12px] flex flex-wrap flex-col w-[180px] absolute top-[120%] sm:left-1/2 sm:-translate-x-1/2 transition-all
                group-hover:top-[60px] invisible group-hover:visible opacity-0 group-hover:opacity-100 right-0
                
                ">
                            <li
                                className="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                                <Link to ="/login"
                                    className="font-recoleta leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-t-[12px]">login</Link>
                            </li>

                            <li
                                className="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                                <Link to ="/register"
                                    className="font-recoleta leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-b-[12px]">register</Link>
                            </li>


                        </ul>
                    </li>
                    <li>
                        <Link to ="/addproperties"
                            className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white hidden sm:block text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all">Add
                            Property</Link></li>
                    <li className="ml-2 sm:ml-5 lg:hidden">
                        <Link to ="/offcanvas-mobile-menu" className="offcanvas-toggle flex text-[#016450] hover:text-secondary">
                            <svg width="24" height="24" className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    </div>
</div>
       
        </>
    )
}

export default Nav