import React from 'react'
import { ChevronDown, ClipboardList, HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../css/ExpertPage.css';
import { UserButton } from './UserButton';
import { ethers } from 'ethers';
import abi from '../ABI/consultVerse.json';
import { connectAccount } from 'enchantmask';

const Expertcard = ({ Name, Email,ImageURL}) => {

    const MakeRequesttoAdmin = async () => {
        await connectAccount();
        const ContractAddress="0x49C49cC95d6337bb93ad662AabF9F186F098E690";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signers = provider.getSigner();
        const ContractInstance = new ethers.Contract(ContractAddress, abi.abi, signers);
        const RequestedEAdminExpert=await ContractInstance.requestAdmin();
        console.log("Requested to Admin"+RequestedEAdminExpert);
    }

    const checkRequestStatusofRequest=async()=>{
        await connectAccount();
        const ContractAddress="0x49C49cC95d6337bb93ad662AabF9F186F098E690";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signers = provider.getSigner();
        const ContractInstance = new ethers.Contract(ContractAddress, abi.abi, signers);
        const CheckedStatus=await ContractInstance.checkRequestStatus();
        console.log(CheckedStatus);
        alert("Request Status Acceptance : "+CheckedStatus);
    }


    return (
        <section>
            <div className='grid grid-cols-6 bg-white '>
                <div className='min-h-screen felx flex-col justify-between bg-slate-200 h-100 px-2.5 py-4 relative'>
                    {/* Logo and Name */}
                    <div className='flex gap-3'>
                        <div className='flex flex-col mx-4 gap-1 justify-start items-start w-2/3'>
                            <p className='text-2xl font-semibold'>ConsultX</p>
                        </div>
                        <div className='flex items-center'>
                            <ChevronDown className='h-7 w-7 font-bold' />
                        </div>
                    </div>

                    {/* Navigation List */}
                    <div className='mt-6 gap-1'>
                        <Link to="/profile">
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
                    <div style={{ display: 'block', margin: 'auto', width: 'fit-content', marginTop: '30px' }}>
                        <h1>Hi!!! {Name}</h1>
                        <br />
                        <div className="card-container">
                            <img className="round" src={ImageURL} alt="user" style={{ height: '100px', width: '100px', display: 'block', margin: 'auto', width: 'fit-content' }} />
                            <h3>Name : {Name}</h3>
                            <h6>Email : {Email}</h6>
                            <div className="skills">
                                <br />
                                <button style={{ border: '3px solid grey' }} onClick={MakeRequesttoAdmin}>Request Admin</button>
                                <button style={{ border: '3px solid grey', marginLeft:'20px' }} onClick={checkRequestStatusofRequest}>Check Status</button>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Expertcard