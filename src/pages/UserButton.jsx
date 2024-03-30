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

  useEffect(() => {
    CheckClerkLoad();
  }, [loaded])

  return (
    <UnstyledButton className={classes.user}>
      <Group>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 20,
        }}>
          <Avatar
            src={UserImage}
            style={{borderRadius: '50%'}}
          />
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 20
        }}>
          <Text size="sm" color="gray" 
          style={{ 
            textAlign: 'left', marginTop: 30, fontWeight: "bold"
          }}>
            {UserName}
          </Text>
          <Text size="sm" color="gray" style={{ textAlign: 'left' }}>
            {UserEmail}
          </Text>
        </div>
        <div
        // make a round circle
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: 50,
            height: 50,
            backgroundColor: 'rgba(0,0,0,0.1)',
            marginLeft: 75,
            marginTop: 10
          }}
        >
        <IconLogout
          style={{ color: 'red'}}
          stroke={1.5}
          onClick={SignoutUser}
        />
        </div>
      </Group>
    </UnstyledButton>
  );
}