import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import classes from '../css/UserButton.css';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function UserButton() {

  const [UserImage, setUserImage] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [Accountc, setAccountc] = useState("");
  const Navigator = useNavigate();

  const { loaded, session, signOut } = useClerk();

  const SignoutUser = () => {
    signOut(() => { Navigator("/") });
  }

  const CheckClerkLoad = () => {
    if (loaded) {
      console.log("Clerk is Loaded");
      setUserImage(session.user.imageUrl);
      setUserName(session.user.fullName);
      const EmailAddres = session.user.primaryEmailAddress.emailAddress;
      setUserEmail(EmailAddres);

    } else {
      console.log("Clerk is Loading...")
    }
  }

  const ConnectToMetamask = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            "method": "eth_requestAccounts",
            "params": []
        });

        const Account = accounts[0];
        console.log(accounts)
        console.log("Account Connected: " + Account);
        setAccountc(Account);
    } else {
        throw new Error("Metamask Not Installed!!");
    }
}

  useEffect(() => {
    CheckClerkLoad();
    ConnectToMetamask();
  }, [loaded])

  return (

    <div className='absolute bottom-2 flex flex-col gap-4 items-center mb-2 w-[90%]'>
            <div className='flex justify-between items-center px-3 py-2 bg-slate-300 rounded-md w-full'>
              <div className=''>
              </div>
              <div className='pl-3 w-full text-wrap'>
                <p className='text-[13px] font-semibold truncate w-1/2'>Wallet Address</p>
                <p className='text-[13px] font-semibold truncate w-1/2'>{Accountc}</p>
              </div>
            </div>
            <div className='flex justify-between items-center px-3 py-2 bg-slate-300 rounded-md w-full'>
              <div className=''>
                <img className='w-10 h-10 rounded-full' src={UserImage} alt='userImage'/>
              </div>
              <div className='pl-3 w-full'>
                <p className='text-[13px]'>{UserName}</p>
                <p className='text-[16px]'>{UserEmail}</p>
              </div>
            </div>
    </div>
  );
}