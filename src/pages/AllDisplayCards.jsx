import abi from '../ABI/consultVerse.json';
import { connectAccount } from 'enchantmask';
import {ethers} from 'ethers';


const AllDisplayCards = () => {
    return (
        <>
            <h1 style={{margin:'auto',display:'block',width:'fit-content'}}>All Experts</h1>



            <div className='col-span-5'>
                <div style={{ display: 'block', margin: 'auto', width: 'fit-content', marginTop: '40px' }}>
                    <div className="card-container">
                        <h3>Name : Aditya Suryawanshi</h3>
                        <h3>WalletAddress: 0x2f9a620CA1811EF90200789e7511d88D224053dD</h3>
                        <h6>Expertise : Blockchain</h6>
                        <h6>Fees : 10 ethers</h6>
                        <div className="skills">
                            <br />
                            <button onClick={async(e)=>{
                                e.preventDefault();
                                const Account=await connectAccount();
                                const ContractAddress = "0x49C49cC95d6337bb93ad662AabF9F186F098E690";
                                const provider = new ethers.providers.Web3Provider(window.ethereum);
                                const signers = provider.getSigner();
                                const ContractInstance = new ethers.Contract(ContractAddress, abi.abi, signers);
                                const RequestExpert=await ContractInstance.ApplytoParticularExpert("0x2f9a620CA1811EF90200789e7511d88D224053dD",Account,{value: ethers.utils.parseEther('0.0001')})
                                console.log(RequestExpert);
                            }}>Request Expert</button>
                        </div>
                    </div>
                </div>

                <div>

                </div>


            </div>
        </>
    )
}

export default AllDisplayCards