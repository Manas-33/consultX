import React from 'react'

import {  ArrowDown, ArrowDownToLine, ArrowUpDown, BadgePercent, BarChartBig, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, CreditCard, HelpCircle, HomeIcon, Info, LayoutGrid, MousePointer2, Palette, Search, Truck, Users, Volume2, Wallet, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import ClerkProfile from './ClerkProfile'

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
                <p className='text-[14px]'>Your Profile</p>
              </div>
              </Link>
          </div>
      </div>

      {/* Dashboard Navbar*/}
      <div className='col-span-5'>
        <ClerkProfile />
      </div>
    </div>
    </section>
  )
}

export default Requests