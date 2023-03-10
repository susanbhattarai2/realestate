import React from 'react'

const Counter = () => {
  return (
    <>
    <ul className="flex flex-wrap list-none">
    <li className="block">
        <span className="font-recoleta text-secondary text-lg"><span className="counter-up">20</span> <span>k+</span></span>
        <p>Properties</p>
    </li>
    <li className="block pl-[40px] md:pl-[60px]">
        <span className="font-recoleta text-secondary text-lg"><span className="counter-up">12</span> <span>k+</span></span>
        <p>Customers</p>
    </li>
    <li className="block pl-[40px] md:pl-[60px]">
        <span className="font-recoleta text-secondary text-lg"><span className="counter-up">160</span>
            <span>+</span></span>
        <p>Awards Win</p>
    </li>
</ul>
    </>
  )
}

export default Counter