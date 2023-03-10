import React from 'react'

const Newsletter = () => {
  return (
    <>
    
    <div className="flex flex-wrap items-center justify-between py-[30px] xl:py-[40px] px-[30px] xl:px-[55px] shadow-[0px_10px_20px_rgba(196,196,196,0.5)] rounded-[15px] border border-[rgba(1,100,80,0.25)] bg-white mb-[80px] lg:mb-[-75px]">
    <div className="w-full lg:w-auto">
        <h3 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-[36px] leading-[1.277] mb-[10px]">Are you a Home Owner?</h3>
        <p className="text-secondary leading-[1.5] tracking-[0.03em]">Put your email address and get listed.</p>
    </div>
    <div className="w-full lg:w-auto mt-5 lg:mt-0">
        <form id="mc-form" action="#" className="relative w-full">
            <input id="mc-email" className="font-light text-primary leading-[1.75] opacity-100 border border-[#FF6500] w-full lg:w-[395px] xl:w-[495px] h-[60px] rounded-[10px] py-[15px] pl-[15px] pr-[15px] sm:pr-[135px] focus:border-primary focus:outline-none border-opacity-60 placeholder:text-primary" type="text" placeholder="Enter your email here..."/>
            <button id="mc-submit" type="submit" className="text-white font-medium text-[16px] leading-none tracking-[0.02em] bg-primary py-[15px] px-[20px] mt-5 sm:mt-0 rounded-[10px] hover:bg-secondary transition-all sm:absolute sm:right-[5px] sm:top-1/2 sm:-translate-y-1/2">Get Listed</button>
        </form>
        {/* <!-- mailchimp-alerts Start --> */}
        <div className="mailchimp-alerts text-centre">
            <div className="mailchimp-submitting"></div>
            {/* <!-- mailchimp-submitting end --> */}
            <div className="mailchimp-success text-green-400"></div>
            {/* <!-- mailchimp-success end --> */}
            <div className="mailchimp-error text-red-600"></div>
            {/* <!-- mailchimp-error end --> */}
        </div>
        {/* <!-- mailchimp-alerts end --> */}
    </div>
</div>

    
    </>
  )
}

export default Newsletter