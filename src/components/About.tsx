import React from 'react'

const About = () => {
    return (
        <>
            <section className='py-12 px-8 bg-gray-200 flex flex-col justify-center items-center gap-6'>
                <img
                    src='/assets/logo_white2.png'
                    alt='logo_bg'
                    className='w-[280px] h-[130px] mx-auto'
                />
                <h1 className='text-3xl py-5 text-black/80 font-medium'>
                    We SHAPE The Vision To Your Success!
                </h1>
                <p className='w-[90%] mx-auto text-center text-black/80 text-sm'>
                    KeyHR is aligned with preferred provider companies to offer
                    new and innovative ways to meet our clients’ payroll,
                    employee leasing, benefits and insurance needs. Our
                    relationship with these companies helps business owners
                    reduce costs, save time, optimize their workforce, increase
                    revenue and minimize risk.
                </p>
                <button className='py-2 px-5 text-[0.8rem] rounded-full border border-black/40 text-black transition-all ease-linear hover:bg-primary hover:text-white cursor-pointer'>
                    ABOUT US
                </button>
            </section>
        </>
    )
}

export default About
