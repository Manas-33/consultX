import React from 'react';
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import Home from './Home';
import NewHome from './NewHome';

const MainRender = () => {
    return (
        <>
            <SignedOut>
                <Home />
            </SignedOut>

            <SignedIn>
                <NewHome />
            </SignedIn>
        </>
    )
}

export default MainRender