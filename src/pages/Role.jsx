import { Menu, Transition } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Role() {

    const { user } = useUser();

    const [FilledProfile, setFilledProfile] = useState(true);

    const checkRole = async () => {
        const sentAddress = user.primaryEmailAddress.emailAddress;
        await axios.post("http://localhost:9000/CheckRole", { Email: sentAddress }, { withCredentials: true }).then((res) => {
            const StringRes = res.data.toString();
            if (StringRes === "") {
                setFilledProfile(false);
            } else {
                console.log(`User Has Role of : ${res.data}`);
            }
        }).catch((err) => {
            console.log(`Error is Occured : ${err}`);
        })

    }

    const MakeRequesttoBackendExpert= async (e) => {
        e.preventDefault();
        alert("New Expert is Added!");
        const User = {
          Name: user.fullName,
          Email: user.primaryEmailAddress.emailAddress,
          ImageUrl:user.imageUrl,
          Role: 'Expert'
        }

        await axios.post("http://localhost:9000/RegisterUser", { User: User }, { withCredential: true }).then((res) => {
          console.log(`User Has Been Added` + res.data);
        }).catch((err) => {
          console.log(`Error is Occured : ${err}`);
        })
      }

      const MakeRequesttoBackendClient= async (e) => {
        e.preventDefault();
        alert("New Client is Added!");
        const User = {
          Name: user.fullName,
          Email: user.primaryEmailAddress.emailAddress,
          ImageUrl:user.imageUrl,
          Role: 'Client'
        }

        await axios.post("http://localhost:9000/RegisterUser", { User: User }, { withCredential: true }).then((res) => {
          console.log(`User Has Been Added` + res.data);
        }).catch((err) => {
          console.log(`Error is Occured : ${err}`);
        })
      }


    useEffect(() => {
        checkRole();
    })

    return (
        <>
{!FilledProfile && <div>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center rounded-md bg-transperent text-sm px-1 my-1 text-black dark:text-white hover:underline">
                            <p className='text-base text-white'>Select Role</p>
                            <IconChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black text-white ">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-black text-white hover:underline ' : 'text-white-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                         onClick={MakeRequesttoBackendExpert}>
                                            Expert
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-black text-white hover:underline ' : 'text-white-700 ',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        onClick={MakeRequesttoBackendClient}>
                                            Client
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>}
        </>

    )
}