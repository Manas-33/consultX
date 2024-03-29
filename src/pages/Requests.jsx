import React from 'react'

import {  ArrowDown, ArrowDownToLine, ArrowUpDown, BadgePercent, BarChartBig, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, CreditCard, HelpCircle, HomeIcon, Info, LayoutGrid, MousePointer2, Palette, Search, Truck, Users, Volume2, Wallet, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const Requests = () => {
  return (
    <section>
        <div className='grid grid-cols-6 bg-white '>
      <div className='min-h-screen felx flex-col justify-between bg-slate-200 h-100 px-2.5 py-4 relative'>
          {/* Logo and Name */}
          <div className='flex gap-3'>
            <div className='flex flex-col mx-4 gap-1 justify-start items-start w-2/3'>
              <p className='text-2xl font-semibold'>
                ConsultX</p>
            </div>
            <div className='flex items-center'>
              <ChevronDown className='h-7 w-7 font-bold'/>
            </div>
          </div>

          {/* Navigation List */}
          <div className='mt-6 gap-1'>
            <Link to="/admin">
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                <HomeIcon className='w-5 h-5'/>
                <p className='text-[14px]'>Home</p>
              </div>
              </Link>
              <Link to="/admin/requests">
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                <ClipboardList className='w-5 h-5'/>
                <p className='text-[14px]'>Your Requests</p>
              </div>
              </Link>
              <Link to={"/admin/pendingRequests"}>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                <LayoutGrid className='w-5 h-5'/>
                <p className='text-[14px]'>Pending Requests</p>
              </div>
              </Link>
          </div>
      </div>

      {/* Dashboard Navbar*/}
      <div className='col-span-5'>
        {/* Navbar */}
        <div className='grid grid-cols-3 gap-4 py-4 px-8 items-center border-b-2 border-gray-200'>
            <div className='flex gap-4 w-auto'>
              <p className='text-[15px] font-md'>Payments</p>
              <div className='flex items-center gap-2 w-auto'>
                <HelpCircle className='text-gray-400 w-4 h-4'/>
                <p className='text-sm font-sm text-gray-400'> How it works?</p>
              </div>
            </div>
            <div className='flex gap-4 w-auto items-center bg-gray-100 px-4 py-2'>
              <Search className='text-gray-400 w-5 h-5'/>
              <p className='text-[15px] text-gray-400'>Search features, payments, etc.</p>
            </div>
        </div>

        {/* Main content */}
        <div className='flex flex-col px-6 py-4'>

          {/* Transactions section */}
          <div className='mt-8 flex flex-col'>
            <div className='w-auto'>
              <p className='text-[20px] font-[500]'>Transactions | This Month</p>
            </div>

            {/* Order Details */}
            <div className='mt-5 p-3'>
                {/* Search Sort and Download Section */}
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3'>
                      <div className='flex justify-between w-full'>
                        <div className='flex flex-start py-2.5 px-4 border border-gray-200 rounded-md w-[248px]'>
                          <Search className='text-gray-400 w-5 h-5'/>
                          <p className='text-[15px] text-gray-400 pl-2'>Search by order ID...</p>
                        </div>
                        {/* Sort Icon */}
                        <div className='flex flex-start items-center py-2.5 px-4 border border-gray-200 rounded-md '>
                          <p className='text-[16px] text-[#4D4D4D]'>Sort</p>
                          <ArrowUpDown className='text-[#4D4D4D] w-5 h-5 pl-1'/>
                        </div>
                      </div>
                      
                      {/* Download Icon  */}
                      <div className='flex flex-start items-center py-2.5 px-4 border border-gray-200 rounded-md '>
                        <ArrowDownToLine className='text-[#4D4D4D] w-5 h-5'/>
                      </div>
                    </div>

                    {/* Table Header */}
                    <div className='py-2.5 px-3 grid grid-cols-4 gap-10 rounded-md bg-[#F2F2F2]'>
                      <div className='flex justify-start items-start'><p className='text-[15px] font-[500]'>Order ID</p></div>
                      <div className='flex justify-start items-center'>
                        <p className='text-[15px] text-[#4D4D4D] font-[500]'>Order Date</p>
                        <ChevronDown className='text-[#4D4D4D] w-5 h-5 ml-1'/>
                      </div>
                      <div className='flex justify-end items-end'><p className='text-[15px] font-[500]'>Order Amount</p></div>
                      <div className='flex justify-end items-center'>
                        <p className='text-[15px] text-[#4D4D4D] font-[500]'>Transaction Fees</p>
                        <Info className='text-[#4D4D4D] w-4 h-4 ml-1'/>
                      </div>
                    </div>

                    {/* Orders List */}
                    <div>
                        <div className='grid grid-cols-4 gap-10 px-3 py-3.5 border-b-2 border-gray-200'>
                                <div className='flex justify-start items-start'><p className='text-[15px] font-[500] text-blue-400'>#281209</p></div>
                                <div className='flex justify-start items-center'>
                                <p className='text-[15px] text-[#4D4D4D] font-[500]'>7 July, 2023</p>
                                </div>
                                <div className='flex justify-end items-end'><p className='text-[15px] font-[500]'>&#x20B9;1728.23</p></div>
                                <div className='flex justify-end items-center'>
                                    <p className='text-[15px] text-[#4D4D4D] font-[500]'>&#x20B9;22</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Requests