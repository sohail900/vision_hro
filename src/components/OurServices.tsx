const servicesImages = [
    {
        id: 1,
        imageUrl: '/assets/services/payroll.jpg',
        hoverTitle: 'Human Resources',
    },
    {
        id: 2,
        imageUrl: '/assets/services/benefits.jpg',
        hoverTitle: 'Admin Work',
    },
    {
        id: 3,
        imageUrl: '/assets/services/client.jpg',
        hoverTitle: 'Sales',
    },
    {
        id: 4,
        imageUrl: '/assets/services/humans.jpg',
        hoverTitle: 'Support',
    },
    {
        id: 5,
        imageUrl: '/assets/services/workers.jpg',
        hoverTitle: 'Finance/Accounting',
    },
]

const OurServices = () => {
    return (
        <section className='bg-secondary pt-28' id='services'>
            <h2
                className='text-center text-2xl text-primary mb-4'
                style={{ fontFamily: 'Satisfy' }}
            >
                We SHAPE The Vision To Your Success!
            </h2>
            <h1 className='text-4xl text-white text-center font-semibold'>
                Our Services
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 pt-20'>
                {servicesImages.map((elem) => (
                    <div
                        key={elem.id}
                        className='relative w-full h-[260px] group overflow-hidden'
                    >
                        <img
                            src={elem.imageUrl}
                            className='w-full h-full object-cover'
                            alt={elem.hoverTitle}
                        />
                        <div className='absolute top-0 left-0 w-full h-full opacity-100 bg-black/30  transition-opacity group-hover:opacity-0' />
                        <h1 className='absolute top-5 left-1/2 -translate-x-1/2 text-white text-[1.1rem] font-medium text-nowrap'>
                            {elem.hoverTitle}
                        </h1>
                        <div className='absolute inset-0 w-full h-full border-[10px] border-black/20 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <h3 className='text-xl text-black/90 font-semibold text-center px-2'>
                                {elem.hoverTitle}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurServices
