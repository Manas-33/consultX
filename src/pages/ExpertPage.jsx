import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDisclosure } from "@nextui-org/react";
import ClerkProfile from './ClerkProfile';
import { UserButton } from './UserButton';
import { ChevronDown, ClipboardList, HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { SmashUploader } from "@smash-sdk/uploader";
import confen from '../images/confen.jpeg'


const ExpertPage = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [FilledProfile, setFilledProfile] = useState(false);
  const [ExpertFees, setExpertFees] = useState("");
  const [ExpertiseSector, setExpertiseSector] = useState("");
  const [UploadedFile, setUploadedFile] = useState();
  const [UploadedFileUrl, setUploadedFileUrl] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(0);



  const user = useUser();

  const CheckFilledProfile = async () => {
    await axios.post("http://localhost:9000/CheckFilledProfile", { UserEmail: user.user.primaryEmailAddress.emailAddress }).then((res) => {
      console.log(res.data)
      setFilledProfile(res.data);
    }).catch((err) => {
      console.log(`${err} Occured`)
    })
  }

  const UpdateData = {
    ExpertFees: ExpertFees,
    ExpertiseSector: ExpertiseSector,
    UploadedFile: UploadedFileUrl,
    PhoneNumber: PhoneNumber
  }

  const UpdateExpertProfile = async (e) => {
    UploadFileToBackend();
    e.preventDefault();
    await axios.post("http://localhost:9000/UpdateExpertProfile", { UserEmail: UserEmail, UpdateData: UpdateData }, { withCredentials: true }).then((res) => {
      console.log()
    }).catch((err) => {
      console.log(`${err} Occured`)
    })
  }


  const UploadFileToBackend = async () => {
    
  }




  useEffect(() => {
    CheckFilledProfile();
  }, [CheckFilledProfile])


  return (

    <>
      {!FilledProfile ? <><section>
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
                <p className='text-[14px]'>Fill Profile</p>
              </div>
              <Link to="/profile">
                <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-slate-300'>
                  <ClipboardList className='w-5 h-5' />
                  <p className='text-[14px]'>Your Profile</p>
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
                <form className='p-4 border border-gray-500 rounded-md' style={{ marginTop: '-70px' }} onSubmit={(e)=>{e.preventDefault()}}>
                  <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                      <h2 class="text-3xl font-semibold leading-7 text-gray-900">Fill Profile and Send to Admin</h2>
                    </div>

                    <div class="border-b border-gray-900/10 pb-12">

                      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div class="sm:col-span-3">
                          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Fees Per Hour(In Ethers)</label>
                          <div class="mt-2">
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setExpertFees(e.target.value)} />
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Expertise Sector</label>
                          <div class="mt-2">
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setExpertiseSector(e.target.value)} />
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


                        <div class="sm:col-span-2">
                          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Aadhar File</label>
                          <div class="mt-2">

                            <input type="file" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={async (e) => {
                              e.preventDefault();
                              UploadFileToBackend();
                            }} />
                            {/* {UploadedFile && <p>UploadedFile URL : {UploadedFile}</p>} */}
                          </div>
                        </div>

                      </div>
                    </div>


                  </div>

                  <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={UploadFileToBackend}>Update</button>
                  </div>

                </form>
              </div>
            </section>


          </div>

        </div>
      </section></> : <></>}
    </>

  )
}

export default ExpertPage