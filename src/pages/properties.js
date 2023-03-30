import React from 'react'
import Nav from '../components/nav'
import Footer from "../components/footer"
import Newsletter from '../components/newsletter'

const Properties
 = () => {
  return (
    <>
    
    <Nav />
    




    
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

export default Properties
