import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CiMenuFries } from 'react-icons/ci'
import { MdCancel } from 'react-icons/md'

const navLinks = [
    { id: 1, name: 'HOME', link: '#' },
    { id: 2, name: 'ABOUT US', link: '#about' },
    { id: 3, name: 'SERVICE', link: '#services' },
    { id: 4, name: 'PRICING', link: '#pricing' },
    { id: 5, name: 'CONTACT US', link: '#contact' },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState(1)

    return (
        <nav className='fixed z-50 top-0 bg-black/60 border-b border-white w-full h-20 flex items-center justify-between px-6 lg:px-12 backdrop-blur-sm'>
            <img
                src='/assets/logo_white2.png'
                alt='logo'
                className='w-[200px] h-[80px]'
            />

            {/* Desktop Menu */}
            <ul className='hidden lg:flex items-center gap-6'>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a
                            href={link.link}
                            onClick={() => setActiveLink(link.id)}
                            className={`${
                                activeLink == link.id
                                    ? 'text-primary'
                                    : 'text-white'
                            } text-sm hover:text-primary transition`}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className='lg:hidden z-50'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <MdCancel className='text-white' />
                    ) : (
                        <CiMenuFries className='text-white' />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className='absolute top-20 left-0 w-full bg-black/90 backdrop-blur-sm border-t border-white py-6 px-4 flex flex-col gap-4 items-center lg:hidden'
                    >
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.link}
                                    className='text-white text-base hover:text-primary transition'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Header
