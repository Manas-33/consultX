import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';
import Role from '../pages/Role';
import { Button } from "@nextui-org/react";
import Jazzicon , { jsNumberForAddress } from 'react-jazzicon';
import axios from 'axios';

function NewHeader() {

    const [top, setTop] = useState(true);
    const [Accountc, setAccountc] = useState("")
    const [FilledProfile, setFilledProfile] = useState(true);
    const [RoleOfUser, setRoleOfUser] = useState("");

    const user = useUser();

    const { signOut } = useClerk();

    const SignOutUser = () => {
        signOut();
    }

    const ConnectToMetamask = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                "method": "eth_requestAccounts",
                "params": []
            });

            const Account = accounts[0];
            console.log("Account Connected: " + Account);
            setAccountc(Account);
        } else {
            throw new Error("Metamask Not Installed!!");
        }
    }

    const checkRoleUser = async () => {
        const sentAddress = user.user.primaryEmailAddress.emailAddress;
        await axios.post("http://localhost:9000/CheckRole", { Email: sentAddress }, { withCredentials: true }).then((res) => {
            const StringRes = res.data.toString();
            if (StringRes === "") {
                setFilledProfile(false);
            } else {
                setRoleOfUser(res.data);
                console.log(`Nav User Has Role of : ${res.data}`);
            }
        }).catch((err) => {
            console.log(`Error is Occured : ${err}`);
        })

    }

    useEffect(() => {
        checkRoleUser();
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);

    }, [top,checkRoleUser]);

    return (
        <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Site branding */}
                    <div className="flex-shrink-0 mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Cruip">
                            <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                                        <stop stopColor="#4FD1C5" offset="0%" />
                                        <stop stopColor="#81E6D9" offset="25.871%" />
                                        <stop stopColor="#338CF5" offset="100%" />
                                    </radialGradient>
                                </defs>
                                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
                            </svg>
                        </Link>

                    </div>

                    <p style={{ fontWeight: 'bolder', fontSize: '30px' }}>ConsultX</p>
                    <br />

                    <img src={user.user.imageUrl} width={"50px"} style={{ borderRadius: '50%', marginLeft: '40px', height: '50px' }} alt='Image is Not uploaded...' />

                    <Link to={"/profile"}><p style={{ marginLeft: '30px', fontWeight: 'bold',color:'black' }}>{user.user.fullName}({RoleOfUser})</p></Link>

                    {RoleOfUser === "Expert" ? <><p className='text-black'><a className='px-2 text-black  hover:underline my-2' href={"/Expert"}>ExpertDash</a></p></> : RoleOfUser === "Client" ? <><p><a className='px-2 text-black dark:text-white hover:underline my-2' href={"/Client"}>ClientDash</a></p></> : <></>}

                    <Role />

                    {!Accountc ? <Button radius="full" onClick={ConnectToMetamask} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" style={{ marginLeft: '30px' }}>
                        Connect
                    </Button> : <>{<><div style={{marginLeft:'100px'}}>
                        <Jazzicon diameter={30} seed={jsNumberForAddress(`${Accountc}`)} />
                        {Accountc.split(0,5)}
                    </div></>}</>}

                    {/* Site navigation */}
                    <nav className="flex flex-grow" >
                        <ul className="flex flex-grow justify-end flex-wrap items-center">

                            <li onClick={SignOutUser}>
                                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                                    <span>Logout</span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                    </nav>

                </div>
            </div>
        </header>
    );
}

export default NewHeader;
