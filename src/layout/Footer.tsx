import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='bg-secondary pt-12 px-4 md:px-8' id='contact'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Left Column */}
                    <div>
                        <div className='mb-6'>
                            <img
                                src='/assets/logo_white2.png'
                                alt='Key HR Logo'
                                className='h-16 w-auto'
                            />
                        </div>
                        <p className='mb-6 text-gray-300'>
                            We SHAPE The Vision To Your Success!
                        </p>

                        <div className='space-y-1 mb-6 text-gray-300 text-sm'>
                            <p className='font-semibold'>
                                Address:{' '}
                                <span className='font-normal'>Vision HRO</span>
                            </p>
                            <p>32 N Gould St. Sheridan, WY 82801</p>
                            <p className='font-semibold mt-4'>
                                Phone:{' '}
                                <span className='font-normal'>
                                    +1 ‪307 200-9359
                                </span>
                            </p>
                            <p className='font-semibold'>
                                Email:{' '}
                                <a
                                    href='mailto:visionhroconsultancy@gmail.com'
                                    className='font-normal hover:text-white transition-colors'
                                >
                                    visionhroconsultancy@gmail.com
                                </a>
                            </p>
                        </div>

                        <div className='flex space-x-4 mt-6 text-gray-300'>
                            <Link
                                to='http://facebook.com'
                                target='_blank'
                                className='bg-white/5 p-2 rounded-full hover:bg-primary transition-colors'
                            >
                                <FaFacebook size={18} />
                            </Link>
                            <Link
                                to='http://x.com'
                                target='_blank'
                                className='bg-white/5 p-2 rounded-full hover:bg-primary transition-colors'
                            >
                                <BsTwitter size={18} />
                            </Link>
                            <Link
                                to='http://linkedin.com'
                                target='_blank'
                                className='bg-white/5 p-2 rounded-full hover:bg-primary transition-colors'
                            >
                                <BsLinkedin size={18} />
                            </Link>
                            <Link
                                to='http://mail.com'
                                className='bg-white/5 p-2 rounded-full hover:bg-primary transition-colors'
                            >
                                <GoMail size={18} />
                            </Link>
                            <Link
                                to='http://instagram.com'
                                target='_blank'
                                className='bg-white/5 p-2 rounded-full hover:bg-primary transition-colors'
                            >
                                <BsInstagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h3 className='text-white font-semibold text-lg mb-6'>
                            RECENT POSTS
                        </h3>
                        <div className='space-y-4 mb-8 text-gray-300'>
                            <Link
                                to='#'
                                className='block border-b border-gray-700 pb-3  transition-colors'
                            >
                                Vision HRO UNLOCKED Newsletter – ISSUE NO. 83 |
                                May, 2025
                            </Link>
                            <Link
                                to='#'
                                className='block border-b border-gray-700 pb-3  hover:text-primary transition-colors'
                            >
                                How Might Your Company's Benefits Help You Hire
                                More "A" Players?
                            </Link>
                            <Link
                                to='#'
                                className='block border-b border-gray-700 pb-3  hover:text-primary transition-colors'
                            >
                                Why Updating Your Benefits Can Lead to a Better
                                Workforce
                            </Link>
                            <Link
                                to='#'
                                className='block border-b border-gray-700 pb-3 hover:text-primary transition-colors'
                            >
                                Vision HRO UNLOCKED Newsletter – ISSUE NO. 82 |
                                APRIL, 2025
                            </Link>
                            <Link
                                to='#'
                                className='block border-b border-gray-700 pb-3 hover:text-primary transition-colors'
                            >
                                Three Leadership Lessons from Today's Top
                                Executives
                            </Link>
                        </div>

                        <div className='flex flex-wrap justify-center md:justify-start gap-6 mt-8'>
                            <img
                                src='/assets/footer/image1.png'
                                alt='FAPEO'
                                className='h-14'
                            />
                            <img
                                src='/assets/footer/image2.png'
                                alt='Bonded ESAC Accredited'
                                className='h-14'
                            />
                            <img
                                src='/assets/footer/image3.png'
                                alt='NAPEO Member'
                                className='h-14'
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className='mt-12 pt-6 pb-2 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center'>
                    <div>©2025 Vision HRO. All Rights Reserved.</div>
                    <div className='mt-4 md:mt-0 flex flex-wrap justify-center gap-x-4'>
                        <Link
                            to='#'
                            className='hover:text-white transition-colors'
                        >
                            Terms & Conditions
                        </Link>
                        <span className='hidden md:inline'>|</span>
                        <Link
                            to='#'
                            className='hover:text-white transition-colors'
                        >
                            Privacy Policy
                        </Link>
                        <span className='hidden md:inline'>-</span>
                        <span>
                            site by{' '}
                            <a
                                href='mailto:mshahwaiz097@gmail.com'
                                className='text-primary hover:underline'
                            >
                                mshahwaiz097@gmail.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
