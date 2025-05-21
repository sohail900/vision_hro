import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CiMenuFries } from 'react-icons/ci'
import { MdCancel } from 'react-icons/md'

const navLinks = [
    { id: 1, name: 'HOME', link: '#' },
    { id: 2, name: 'ABOUT US', link: '#' },
    { id: 3, name: 'SERVICE', link: '#' },
    { id: 4, name: 'PEO', link: '#' },
    { id: 5, name: 'RESOURCES', link: '#' },
    { id: 6, name: 'BLOG', link: '#' },
    { id: 7, name: 'CONTACT US', link: '#' },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='fixed z-50 top-0 bg-black/60 border-b border-white w-full h-20 flex items-center justify-between px-6 lg:px-12 backdrop-blur-sm'>
            <img
                src='/assets/logo_white.png'
                alt='logo'
                className='w-24 h-24'
            />

            {/* Desktop Menu */}
            <ul className='hidden lg:flex items-center gap-6'>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a
                            href={link.link}
                            className={`${
                                link.id === 1 ? 'text-primary' : 'text-white'
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
