const About = () => {
    return (
        <>
            <section
                className='pt-20 pb-12 px-8 bg-gray-200 flex flex-col justify-center items-center gap-6'
                id='about'
            >
                <img
                    src='/assets/logo_white2.png'
                    alt='logo_bg'
                    className='w-[280px] h-[130px] mx-auto'
                />
                <h1 className='text-3xl py-5 text-black/80 font-medium'>
                    We SHAPE The Vision To Your Success!
                </h1>
                <p className='w-[90%] mx-auto text-center text-black/80 text-sm'>
                    Vision HRO partners with top-tier providers to deliver
                    innovative solutions tailored to your business needs. Our
                    comprehensive services include Human Resources,
                    Administrative Support, Sales, Customer Support, Finance &
                    Accounting, Marketing, Payroll, and Quality Control. Through
                    these strategic partnerships, we help business owners reduce
                    costs, save time, streamline operations, enhance workforce
                    efficiency, boost revenue, and mitigate risk.
                </p>
                <button className='py-2 px-5 text-[0.8rem] rounded-full border border-black/40 text-black transition-all ease-linear hover:bg-primary hover:text-white cursor-pointer'>
                    ABOUT US
                </button>
            </section>
        </>
    )
}

export default About
