import React from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import ClerkProfile from './ClerkProfile';
import { UserButton } from './UserButton';

import { ArrowDown, ArrowDownToLine, ArrowUpDown, BadgePercent, BarChartBig, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, CreditCard, HelpCircle, HomeIcon, Info, LayoutGrid, MousePointer2, Palette, Search, Truck, Users, Volume2, Wallet, Zap } from 'lucide-react'

import { Link } from 'react-router-dom'

const AdminPage = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const AcceptRequest = async () => {

  }

  const RejectRequest = async () => {

  }





  return (
    <section>
      <div className='grid grid-cols-6 bg-white '>
        <div className='min-h-screen felx flex-col justify-between bg-slate-200 h-100 px-2.5 py-4 relative'>

          <div className='flex gap-3'>
            <div className='flex flex-col mx-4 gap-1 justify-start items-start w-2/3'>
              <p className='text-2xl font-semibold'>
                ConsultX</p>
            </div>
            <div className='flex items-center'>
              <ChevronDown className='h-7 w-7 font-bold' />
            </div>
          </div>

          {/* Navigation List */}
          <div className='mt-6 gap-1'>
            <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
              <HomeIcon className='w-5 h-5' />
              <p className='text-[14px]'>Home</p>
            </div>
            <Link to="/admin/requests">
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                <ClipboardList className='w-5 h-5' />
                <p className='text-[14px]'>Your Profile</p>
              </div>
            </Link>

            <br />
            <br />
            <br />

            <UserButton  />

          </div>
        </div>


        <div className='col-span-5'>
          {/* <div className='grid grid-cols-3 gap-4 py-4 px-8 items-center border-b-2 border-gray-200'>
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
        </div> */}

          <div className='flex flex-col px-6 py-4'>
            <div>
              <div className='flex justify-between'>
                <p className='text-[20px] text-semibold'>All Requests</p>
                <div className='px-2 py-1 rounded-sm flex border border-gray-300 items-center'>
                  <ChevronDown className='text-gray-400 h-5 w-5' />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 mt-6'>
                <div className='p-5 flex flex-col gap-4 drop-shadow-md'>
                  <div><p className='text-[16px] text-[#4D4D4D]'>Client Requests</p></div>
                  <div><p className='text-4xl'>10</p></div>
                </div>
                <div className='p-5 flex flex-col gap-4 drop-shadow-md'>
                  <div><p className='text-[16px] text-[#4D4D4D]'>Amount received</p></div>
                  <div><p className='text-4xl'>$2,392.19</p></div>
                </div>
              </div>
            </div>

            {/* Transactions section */}
            <div className='mt-8 flex flex-col'>
              <div className='w-auto'>
                <p className='text-[20px] font-[500]'>Requests</p>
              </div>

              {/* Order Details */}
              <div className='mt-5 p-3'>
                {/* Search Sort and Download Section */}
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-3'>
                    <div className='flex justify-between w-full'>
                    </div>

                    {/* Download Icon  */}
                    <div className='flex flex-start items-center py-2.5 px-4 border border-gray-200 rounded-md '>
                      <ArrowDownToLine className='text-[#4D4D4D] w-5 h-5' />
                    </div>
                  </div>

                  {/* Table Header */}
                  <div className='py-2.5 px-3 grid grid-cols-6 gap-10 rounded-md bg-[#F2F2F2]' style={{ marginLeft: '-20px' }}>
                    <div className='flex justify-start items-start'><p className='text-[15px] font-[500]'>RequestID</p></div>
                    <div className='flex justify-start items-center'>
                      <p className='text-[15px] text-[#4D4D4D] font-[500]'>Request date</p>
                    </div>
                    <div className='flex justify-end items-end'><p className='text-[15px] font-[500]'>Details</p></div>

                    <div className='flex justify-end items-center'>
                      <p className='text-[15px] text-[#4D4D4D] font-[500]'>Adhar</p>
                    </div>


                  </div>

                  <Modal isOpen={isOpen} onOpenChange={onOpenChange} style={{ backgroundColor: "white", border: '3px solid grey' }}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">Expert Details</ModalHeader>
                          <ModalBody>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Nullam pulvinar risus non risus hendrerit venenatis.
                              Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Nullam pulvinar risus non risus hendrerit venenatis.
                              Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                              Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                              dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                              Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                              Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                              proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                              Close
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>

                  {/* Orders List */}
                  <div>
                    <div className='grid grid-cols-6 gap-4 px-3 py-3.5 border-b-2 border-gray-200' style={{ marginLeft: '-20px' }}>
                      <div className='flex justify-start items-start'><p className='text-[15px] font-[500] text-blue-400'>#281209</p></div>
                      <div className='flex justify-start items-center'>
                        <p className='text-[15px] text-[#4D4D4D] font-[500]'>7 July, 2023</p>
                      </div>
                      <div className='flex justify-end items-end'><p className='text-[15px] font-[500]' onClick={onOpen}>Show Details</p></div>
                      <div className='flex justify-end items-center'>
                        <p className='text-[15px] text-[#4D4D4D] font-[500]'>&#x20B9;22</p>
                      </div>


                      <div className='flex justify-end items-end' style={{ width: 'fit-content', marginLeft: '50px' }}>
                        <button onClick={AcceptRequest} >Accept</button>
                      </div>

                      <div className='flex justify-end items-end' style={{ width: 'fit-content' }}>
                        <button>Reject</button>
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

export default AdminPage