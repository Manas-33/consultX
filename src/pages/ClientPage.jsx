import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserButton } from './UserButton';
import {  ClipboardList, HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import * as LR from "@uploadcare/blocks";
import { ethers } from 'ethers';
import abi from '../ABI/consultVerse.json';
import { connectAccount } from 'enchantmask';
import '../css/ExpertPage.css';
import ClientCard from './ClientCard';



const Clientpage = () => {

    LR.registerBlocks(LR);
    const [COntract, setCOntract] = useState();
    const [Address, setAddress] = useState("");
    const [FilledProfile, setFilledProfile] = useState(false);
    const [ClientInterest, setClientInterest] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState(0);
    const [AllExperts, setAllExperts] = useState();

    const user = useUser();

    const CheckFilledProfile = async () => {
        await axios.post("http://localhost:9000/CheckClientRole", { UserEmail: user.user.primaryEmailAddress.emailAddress }).then((res) => {
            setFilledProfile(res.data);
        }).catch((err) => {
            console.log(`${err} Occured`)
        })
    }

    const UpdateData = {
        PhoneNumber: PhoneNumber,
        ClientInterest: ClientInterest
    }

    const UpdateClientProfileFunction = async (e) => {
        e.preventDefault();
        await connectAccount();
        const ContractAddress = "0x49C49cC95d6337bb93ad662AabF9F186F098E690";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signers = provider.getSigner();
        const ContractInstance = new ethers.Contract(ContractAddress, abi.abi, signers);
        const NewClientAdded = await ContractInstance.AddClient(user.user.fullName,user.user.primaryEmailAddress.emailAddress,PhoneNumber,ClientInterest);
        console.log(NewClientAdded);

        await axios.post("http://localhost:9000/UpdateClientProfile", { UserEmail: user.user.primaryEmailAddress.emailAddress, UpdateData: UpdateData }, { withCredentials: true }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(`${err} Occured`)
        })

    }

    const AllExpertsFetch = async () => {

        axios.get("http://localhost:9000/getAllExperts").then(async (res) => {
            setAllExperts(res.data);
        }).catch((err)=>{
            console.log(`${err} is Occured`);
        })
    }

    useEffect(() => {
        CheckFilledProfile();
        AllExpertsFetch();
    }, [CheckFilledProfile])


    return (

        <>
            {!FilledProfile ? <><section>
                <div className='grid grid-cols-6 bg-white '>
                    <div className='min-h-screen felx flex-col justify-between bg-slate-200 h-100 px-2.5 py-4 relative' style={{ width: '300px' }}>

                        <div className='flex gap-3 '  >
                            <div className='flex flex-col mx-4 gap-1 justify-start items-start w-2/3'>
                                <p className='text-2xl font-semibold'>ConsultX(Client)</p>
                            </div>
                        </div>

                        

                        <div className='mt-6 gap-1'>

                       <Link to={"/experts"}>
                       <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                                <HomeIcon className='w-5 h-5' />
                                <p className='text-[14px]'>All Experts</p>
                            </div></Link>
                        

                            <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                                <HomeIcon className='w-5 h-5' />
                                <p className='text-[14px]'>Fill Profile</p>
                            </div>

                            <Link to={""}>
                                <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                                    <ClipboardList className='w-5 h-5' />
                                    <p className='text-[14px]'>Your Profile</p>
                                </div>
                            </Link>


                            <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                                <HomeIcon className='w-5 h-5' />
                                <p className='text-[14px]'>Check Approvals</p>
                            </div>

                            <Link to={"/clientreq"}>
                                <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                                    <HomeIcon className='w-5 h-5' />
                                    <p className='text-[14px]'>Check Requests</p>
                                </div>
                            </Link>

                            <br />
                            <br />
                            <br />

                            <UserButton />
                        </div>
                    </div>


                    <div className='col-span-5'>

                        <section>
                            <div className='p-36 '>
                                <form className='p-4 border border-gray-500 rounded-md' style={{ marginTop: '-70px' }} onSubmit={(e) => { e.preventDefault() }}>
                                    <div class="space-y-12">
                                        <div class="border-b border-gray-900/10 pb-12">
                                            <h2 class="text-3xl font-semibold leading-7 text-gray-900">Fill Profile and Send to Expert</h2>
                                        </div>

                                        <div class="border-b border-gray-900/10 pb-12">


                                            <div class="sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Interested Sector</label>
                                                <div class="mt-2">
                                                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setClientInterest(e.target.value)} />
                                                </div>
                                            </div>


                                            <div class="sm:col-span-2 sm:col-start-1">
                                                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">PhoneNumber</label>
                                                <div class="mt-2">
                                                    <input type="number" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPhoneNumber(e.target.value)} />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                                                <div class="mt-2">
                                                    <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>



                                        </div>


                                    </div>

                                    <div class="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={UpdateClientProfileFunction}>Update</button>
                                    </div>

                                </form>
                            </div>
                        </section>


                    </div>

                </div>
            </section></> : <><p><ClientCard Name={user.user.fullName} Email={user.user.primaryEmailAddress.emailAddress} ImageURL={user.user.imageUrl} /></p></>}
        </>

    )
}

export default Clientpage