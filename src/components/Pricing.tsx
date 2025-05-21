import { FaCheck } from 'react-icons/fa'

export default function PricingSection() {
    return (
        <section className='py-12 px-8 bg-white'>
            <h2
                className='text-center text-2xl text-primary mb-4'
                style={{ fontFamily: 'Satisfy' }}
            >
                Transparent Pricing, Tailored for You!
            </h2>
            <h1 className='text-4xl text-black/80 text-center font-semibold mb-12'>
                Our Pricing Plans
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-0 lg:border lg:border-gray-300'>
                {/* Starter Plan */}
                <div className='border lg:border-r border-gray-300 flex flex-col'>
                    <div className='flex flex-col items-center justify-center p-6 pb-2'>
                        <div className='w-32 h-32 rounded-full border-4 border-blue-800 flex items-center justify-center mb-4'>
                            <div className='text-center'>
                                <span className='text-xl'>$</span>
                                <span className='text-5xl font-bold'>299</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='bg-blue-800 text-white py-1 px-6 font-bold relative z-10'>
                                STARTER PLAN
                            </div>
                            <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-blue-800 -z-0'></div>
                            <div className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-4 h-4 bg-blue-800 rotate-45 -z-0'></div>
                            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-4 h-4 bg-blue-800 rotate-45 -z-0'></div>
                        </div>
                    </div>

                    <div className='text-center font-bold text-xl py-2'>
                        PER USER | PER MONTH
                    </div>

                    <div className='border-t border-gray-300 p-6 text-center flex flex-col h-full'>
                        <div className='text-4xl font-bold mb-2'>
                            <span className='text-xl'>$</span>799
                        </div>
                        <div className='font-bold mb-2'>
                            PER USER | PER QUARTER
                        </div>
                        <div className='text-gray-600 mb-4'>
                            That's a 16.6% savings per quarter
                        </div>

                        <div className='border border-gray-400 p-2 mb-6 text-center'>
                            Free Trial 3 Days-/
                        </div>

                        <div className='space-y-4 text-left'>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>3 Hours/Day (15 hrs/week)</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Scheduling & Booking</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Call Answering / Support</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Email & Message Handling</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Monthly Reports / Analytics</span>
                            </div>
                        </div>

                        <button className='mt-auto w-fit mx-auto bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition-colors'>
                            Get Now
                        </button>
                    </div>
                </div>

                {/* Growth Plan */}
                <div className='border lg:border-r border-gray-300 flex flex-col'>
                    <div className='flex flex-col items-center justify-center p-6 pb-2'>
                        <div className='w-32 h-32 rounded-full border-4 border-red-500 flex items-center justify-center mb-4'>
                            <div className='text-center'>
                                <span className='text-xl'>$</span>
                                <span className='text-5xl font-bold'>499</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='bg-red-500 text-white py-1 px-6 font-bold relative z-10'>
                                GROWTH PLAN
                            </div>
                            <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-red-500 -z-0'></div>
                            <div className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-4 h-4 bg-red-500 rotate-45 -z-0'></div>
                            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-4 h-4 bg-red-500 rotate-45 -z-0'></div>
                        </div>
                    </div>

                    <div className='text-center font-bold text-xl py-2'>
                        PER USER | PER MONTH
                    </div>

                    <div className='border-t border-gray-300 p-6 text-center flex flex-col h-full'>
                        <div className='text-4xl font-bold mb-2'>
                            <span className='text-xl'>$</span>1197
                        </div>
                        <div className='font-bold mb-2'>
                            PER USER | PER QUARTER
                        </div>
                        <div className='text-gray-600 mb-4'>
                            That's a 20% savings per quarter
                        </div>

                        <div className='border border-gray-400 p-2 mb-6 text-center'>
                            Free Trial 3 Days-/
                        </div>

                        <div className='text-red-500 font-bold text-xl mb-4'>
                            Everything in Starter +
                        </div>

                        <div className='space-y-4 text-left mb-8'>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>5 Hours/Day (25 hrs/week)</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Client Follow-up & Reminders</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>CRM Management</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Estimates & Invoicing</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Weekly Reports / Analytics</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Marketing Posts (2-3 P)</span>
                            </div>
                        </div>

                        <button className='mt-auto w-fit mx-auto bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors'>
                            Get Now
                        </button>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className='max-lg:border max-lg:border-gray-300  flex flex-col'>
                    <div className='flex flex-col items-center justify-center p-6 pb-2'>
                        <div className='w-32 h-32 rounded-full border-4 border-black flex items-center justify-center mb-4'>
                            <div className='text-center'>
                                <span className='text-xl'>$</span>
                                <span className='text-5xl font-bold'>799</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='bg-black text-white py-1 px-6 font-bold relative z-10'>
                                ENTERPRISE PLAN
                            </div>
                            <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black -z-0'></div>
                            <div className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-4 h-4 bg-black rotate-45 -z-0'></div>
                            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-4 h-4 bg-black rotate-45 -z-0'></div>
                        </div>
                    </div>

                    <div className='text-center font-bold text-xl py-2'>
                        PER USER | PER MONTH
                    </div>

                    <div className='border-t border-gray-300 p-6 text-center flex flex-col h-full'>
                        <div className='text-4xl font-bold mb-2'>
                            <span className='text-xl'>$</span>1917
                        </div>
                        <div className='font-bold mb-2'>
                            PER USER | PER QUARTER
                        </div>
                        <div className='text-gray-600 mb-4'>
                            That's a 20% savings per quarter
                        </div>

                        <div className='text-3xl font-bold  mb-6'>
                            LIMITED TIME OFFER
                        </div>

                        <div className='font-bold text-xl mb-4'>
                            Everything in Growth +
                        </div>

                        <div className='space-y-4 text-left'>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>7 Hours/Day (35 hrs/week)</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Lead-Gen/ Inbound Sales</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Weekend Support</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Billing/ Payment Followups</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Business Analytics</span>
                            </div>
                            <div className='flex items-start'>
                                <FaCheck className='text-green-600 mr-2 h-6 w-6 flex-shrink-0' />
                                <span>Dedicated Account Manager</span>
                            </div>
                        </div>

                        <button className='mt-auto w-fit mx-auto bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors'>
                            Get Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
