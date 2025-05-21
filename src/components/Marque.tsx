import Marquee from 'react-fast-marquee'
const allMarqueImages = [
    '/assets/marque/AP.jpg',
    '/assets/marque/CR.jpg',
    '/assets/marque/IABA.jpg',
    '/assets/marque/KU.jpg',
    '/assets/marque/ZA.jpg',
    '/assets/marque/AccidentFund.png',
    '/assets/marque/ESPYR.png',
    '/assets/marque/prin.png',
    '/assets/marque/stNash.png',
    '/assets/marque/sunzlittle.png',
    '/assets/marque/wells2.png',
]

const Marque = () => {
    return (
        <section className='py-10  px-4 md:px-8'>
            <h1 className='text-4xl text-black/80 text-center font-semibold mb-12'>
                Our Preferred Providers
            </h1>

            <div className='relative w-full md:w-4/5 mx-auto'>
                {/* Left gradient mask */}
                <div className='absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none'></div>

                <Marquee gradient={false} speed={35} pauseOnHover={true}>
                    {allMarqueImages.map((image, index) => (
                        <div key={index} className='mx-8'>
                            <img
                                src={image}
                                alt={`Provider logo ${index + 1}`}
                                className='w-[130px] h-[130px] object-contain'
                            />
                        </div>
                    ))}
                </Marquee>

                {/* Right gradient mask */}
                <div className='absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
            </div>
        </section>
    )
}

export default Marque
