import React from 'react'
import { ArrowDown, ArrowDownToLine, ArrowUpDown, BadgePercent, BarChartBig, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, CreditCard, HelpCircle, HomeIcon, Info, LayoutGrid, MousePointer2, Palette, Search, Truck, Users, Volume2, Wallet, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UserButton } from './UserButton'


const ClientRequets = () => {
    return (
        <section>
            <div className='grid grid-cols-6 bg-white '>
                <div className='min-h-screen felx flex-col justify-between bg-slate-200 h-100 px-2.5 py-4 relative'>
                    {/* Logo and Name */}
                    <div className='flex gap-3'>
                        <div className='flex flex-col mx-4 gap-1 justify-start items-start w-2/3'>
                            <p className='text-2xl font-semibold'>
                                ConsultX(Expert)</p>
                        </div>

                    </div>

                    {/* Navigation List */}
                    <div className='mt-6 gap-1'>
                        
                        <Link to={"/expert"}>
                        <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                            <ClipboardList className='w-5 h-5' />
                            <p className='text-[14px]'>Your Profile</p>
                        </div>
                        </Link>


                        <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                            <HomeIcon className='w-5 h-5' />
                            <p className='text-[14px]'>Check Approvals</p>
                        </div>

                        <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                            <HomeIcon className='w-5 h-5' />
                            <p className='text-[14px]'>Check Clients</p>

                        </div>

                        <br />
                        <br />
                        <br />

                        <UserButton />
                    </div>

                </div>

                {/* Dashboard Navbar*/}
                <div className='col-span-5'>
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-[20px] text-semibold'>All Requests</p>
                            <div className='px-2 py-1 rounded-sm flex border border-gray-300 items-center'>
                                <ChevronDown className='text-gray-400 h-5 w-5' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mt-6'>
                            <div className='p-5 flex flex-col gap-4 drop-shadow-md'>
                                <div><p className='text-[16px] text-[#4D4D4D]'>Experts Requests</p></div>
                                <div><p className='text-4xl'>{ }</p></div>
                            </div>
                            <div className='p-5 flex flex-col gap-4 drop-shadow-md'>
                                <div><p className='text-[16px] text-[#4D4D4D]'>Course Fees</p></div>
                                <div><p className='text-4xl'>{ }</p></div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='grid grid-cols-6 gap-4 px-3 py-3.5 border-b-2 border-gray-200' style={{ marginLeft: '-20px' }}>
                            <div className='flex justify-start items-start'><p className='text-[15px] font-[500] text-blue-400'></p></div>
                            <div className='flex justify-start items-center'>
                                <p className='text-[15px] text-[#4D4D4D] font-[500]'> Ethers</p>
                            </div>
                            <div className='flex justify-end items-end'><a href={''} className='text-[15px] font-[500]'>Show Details</a></div>
                            <div className='flex justify-end items-center'>
                                <p className='text-[15px] text-[#4D4D4D] font-[500]'>
                                    {/* <AnonButton /> */}
                                </p>
                            </div>
                            <div className='flex justify-end items-end' style={{ width: 'fit-content', marginLeft: '50px' }}>
                                <button >Accept</button>
                            </div>

                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientRequets