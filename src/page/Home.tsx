import React from 'react'
import Header from '../layout/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import OurServices from '../components/OurServices'
import PricingSection from '../components/Pricing'
import Marque from '../components/Marque'
import Footer from '../layout/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <OurServices />
            <PricingSection />
            <Marque />
            <Footer />
        </>
    )
}

export default Home
