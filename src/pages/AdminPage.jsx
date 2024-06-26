import { useEffect, useState } from 'react';
import { UserButton } from './UserButton';
import { ArrowDownToLine, ChevronDown, ClipboardList, HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnonButton from '../partials/AnonButton';
import axios from 'axios';
import abi from '../ABI/consultVerse.json';
import { ethers } from 'ethers';
import { connectAccount } from 'enchantmask';

const AdminPage = () => {

  // const [AllRequests, setAllRequests] = useState();

  // const getAlldataofRequestedExperts = async () => {
  //   axios.get("http://localhost:9000/getAllExperts").then((res) => {
  //     console.log(res.data);
  //     setAllRequests(res.data);
  //   })
  // }

  // useEffect(() => {
  //   getAlldataofRequestedExperts();
  // }, [])

  return (
    <section>
      <div className='grid grid-cols-5 bg-white '>
        <div className='min-h-screen felx flex-col justify-between bg-slate-200 h-100 px-2.5 py-4 relative'>

          <div className='flex gap-3'>
            <div className='flex flex-col mx-4 gap-1 justify-start items-start w-2/3'>
              <p className='text-2xl font-semibold'>ConsultX(Admin)</p>
            </div>
          </div>

          {/* Navigation List */}
          <div className='mt-6 gap-1'>
            <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
              <HomeIcon className='w-5 h-5' />
              <p className='text-[14px]'>Home</p>
            </div>
            <Link to="/profile">
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                <ClipboardList className='w-5 h-5' />
                <p className='text-[14px]'>Your Profile</p>
              </div>
            </Link>


            <UserButton />

          </div>
        </div>


        <div className='col-span-4'>
          <div className='flex flex-col px-6 py-4'>
            <div>
              <div className='flex justify-between'>
                <p className='text-[20px] text-semibold'>All Requests</p>
                <div className='px-2 py-1 rounded-sm flex border border-gray-300 items-center'>
                  <ChevronDown className='text-gray-400 h-5 w-5' />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 mt-6'>
                <div className='p-5 flex flex-col gap-4 drop-shadow-md bg-slate-100 rounded-md'>
                  <div><p className='text-[16px] text-[#4D4D4D]'>Experts Requests</p></div>
                  <div><p className='text-4xl'>1</p></div>
                </div>
                <div className='p-5 flex flex-col gap-4 drop-shadow-md'>
                  <div><p className='text-[16px] text-[#4D4D4D]'>Course Fees</p></div>
                  <div><p className='text-4xl'>10</p></div>
                </div>
              </div>
            </div>

            {/* Transactions section */}
            <div className='mt-8 flex flex-col'>
              <div className='w-auto'>
                <p className='text-[20px] font-[500]'>Requests</p>
              </div>


              <div className='mt-5 p-3'>

                <div className='flex flex-col gap-3'>
                  <div className='flex gap-3'>
                    <div className='flex justify-between w-full'>
                    </div>


                    <div className='flex flex-start items-center py-2.5 px-4 border border-gray-200 rounded-md '>
                      <ArrowDownToLine className='text-[#4D4D4D] w-5 h-5' />
                    </div>
                  </div>

                  <div className='py-2.5 px-3 grid grid-cols-6 gap-10 rounded-md bg-[#F2F2F2]' style={{ marginLeft: '-20px' }}>
                    <div className='flex justify-start items-start'><p className='text-[15px] font-[500]'>RequestID</p></div>
                    <div className='flex justify-start items-center'>
                      <p className='text-[15px] text-[#4D4D4D] font-[500]'>Course Fees</p>
                    </div>
                    <div className='flex justify-end items-end'><p className='text-[15px] font-[500]'>Details</p></div>

                    <div className='flex justify-end items-center'>
                      <p className='text-[15px] text-[#4D4D4D] font-[500]'>Aadhar</p>
                    </div>

                  </div>

                      <div>
                        <div className='grid grid-cols-6 gap-4 px-3 py-3.5 border-b-2 border-gray-200' style={{ marginLeft: '-20px' }}>
                          <div className='flex justify-start items-start'><p className='text-[15px] font-[500] text-blue-400'>0</p></div>
                          <div className='flex justify-start items-center'>
                            <p className='text-[15px] text-[#4D4D4D] font-[500]'>10 Ethers</p>
                          </div>
                          <div className='flex justify-end items-end'><a href={''} onClick={(e) => {
                            e.preventDefault();
                            alert(`${JSON.stringify({
                              "id": "0x7db1dc00993ed5f6ce7d9a9604c60ffd97441670fabb6afc3aec89b51d0cf04207000000",
                              "ExpertAddress": "0x7c11134b4e195b4e8ec519a168f500fa459adf5e",
                              "ExpertName": "Aditya Suryawanshi 2.0",
                              "EmailId": "adityavanshi5451@gmail.com",
                              "ExpertFees": "10",
                              "Expertise": "Blockchain",
                              "PhoneNumber": "9834009334"
                            })}`)
                          }} className='text-[15px] font-[500]'>Show Details</a></div>
                          <div className='flex justify-end items-center'>
                            <p className='text-[15px] text-[#4D4D4D] font-[500]'>
                              <AnonButton />
                            </p>
                          </div>
                          <div className='flex justify-end items-end' style={{ width: 'fit-content', marginLeft: '50px' }}>
                            <button onClick={async (e) => {
                              e.preventDefault();
                              const account=await connectAccount();
                              const ContractAddress = "0x49C49cC95d6337bb93ad662AabF9F186F098E690";
                              const provider = new ethers.providers.Web3Provider(window.ethereum);
                              const signers = provider.getSigner();
                              const ContractInstance = new ethers.Contract(ContractAddress, abi.abi, signers);
                              const AcceptRequests=await ContractInstance.AcceptParticularExpertRequest(account);
                              console.log(AcceptRequests);
                            }} >
                              <a className="btn text-white bg-green-500 hover:bg-green-500 w-full mb-4 sm:w-auto sm:mb-0" href="#0">
                                Accept
                              </a>
                            </button>
                          </div>

       <div className='flex justify-end items-end' style={{ width: 'fit-content' }}>
                            <button><a className="btn text-white bg-red-500 hover:bg-red-600 w-full mb-4 sm:w-auto sm:mb-0" href="#0">
                    Reject
                  </a></button>
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