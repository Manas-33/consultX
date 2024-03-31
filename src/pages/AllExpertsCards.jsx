import { useState, useEffect } from 'react'
import AllDisplayCards from './AllDisplayCards';
import axios from 'axios';

const AllExpertsCards = () => {

    const [AllExperts, setAllExperts] = useState("");

    const FetchAllExperts = () => {

        axios.get("http://localhost:9000/getAllExperts").then(async (res) => {
            console.log(res.data);
            setAllExperts(res.data);
        }).catch((err) => {
            console.log(`${err} is Occured`);
        })

    }

    useEffect(() => {
        FetchAllExperts();
    }, [])

    return (
        <>
        {AllExperts && AllExperts.map((val)=>{
            return(<>
              <AllDisplayCards WalletAddress={val.ExpertAddress} Name={val.ExpertName} Email={val.ExpertemailAddress} Expertise={val.expertise}  Fess={val.coursefees}/>
            </>)
        })}

        </>
    )
}

export default AllExpertsCards