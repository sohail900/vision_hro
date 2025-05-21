import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroContent = [
    {
        id: 1,
        imageUrl:
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&auto=format',
        title: 'WE PROVIDE BEST SOLUTIONS FOR YOUR BUSINESS',
    },
    {
        id: 2,
        imageUrl:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&auto=format',
        title: 'INNOVATIVE APPROACH TO COMPLEX PROBLEMS',
    },
    {
        id: 3,
        imageUrl:
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&auto=format',
        title: 'TRUSTED BY INDUSTRY LEADERS WORLDWIDE',
    },
    {
        id: 4,
        imageUrl:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format',
        title: 'CONTACT US FOR CUSTOMIZED SOLUTIONS',
    },
]

const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
        },
    }),
}

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState({})
    console.log(imagesLoaded)
    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const promises = heroContent.map((item) => {
                return new Promise((resolve) => {
                    const img = new Image()
                    img.src = item.imageUrl
                    img.onload = () => {
                        setImagesLoaded((prev) => ({
                            ...prev,
                            [item.id]: true,
                        }))
                        resolve(true)
                    }
                    img.onerror = () => resolve(false)
                })
            })

            await Promise.all(promises)
            setLoaded(true)
        }

        loadImages()
    }, [])

    useEffect(() => {
        if (!loaded) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
            )
        }, 10000)

        return () => clearInterval(interval)
    }, [loaded])

    return (
        <div
            className='relative w-screen h-screen overflow-hidden bg-gray-900'
            id='#'
        >
            <AnimatePresence mode='wait'>
                {loaded && (
                    <motion.div
                        key={heroContent[currentIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className='absolute inset-0 w-full h-full'
                    >
                        {/* Image with animation */}
                        <motion.div
                            className='absolute inset-0 w-full h-full'
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={heroContent[currentIndex].imageUrl}
                                alt='Hero background'
                                className='w-full h-full object-cover'
                                loading='eager'
                                decoding='async'
                            />
                            <div className='absolute top-0 w-full h-full bg-black/30' />
                        </motion.div>

                        {/* Text overlay with dark semi-transparent background */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='text-center px-4 max-w-4xl'>
                                <motion.h1
                                    className='text-white text-4xl md:text-6xl font-bold mb-8 uppercase'
                                    initial='hidden'
                                    animate='visible'
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                            },
                                        },
                                    }}
                                >
                                    {heroContent[currentIndex].title
                                        .split(' ')
                                        .map((word, i) => (
                                            <motion.span
                                                key={i}
                                                className='inline-block mr-2'
                                                variants={wordAnimation}
                                                custom={i}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                </motion.h1>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading placeholder */}
            {!loaded && (
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-full h-full bg-gray-800 animate-pulse'></div>
                </div>
            )}

            {/* Enhanced Navigation Dots */}
            <div className='absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20'>
                {heroContent.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 rounded-full relative ${
                            currentIndex === index
                                ? 'bg-white'
                                : 'bg-white bg-opacity-50'
                        }`}
                        style={{
                            width: currentIndex === index ? '24px' : '12px',
                        }}
                        animate={{
                            width: currentIndex === index ? '24px' : '12px',
                            transition: { duration: 0.3 },
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {currentIndex === index && (
                            <motion.span
                                layoutId='dotIndicator'
                                className='absolute inset-0 rounded-full bg-white'
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    )
}

export default Hero
