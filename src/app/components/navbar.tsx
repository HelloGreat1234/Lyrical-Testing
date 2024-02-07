import Image from 'next/image';
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
    return (
        <div className='flex text-black text-lg w-[100%] justify-evenly '>
            <div className="flex justify-evenly py-5 text-lg font-sans w-[80%]">
                <div className='flex '>
                    {/* <Image className='bg-white' src={'/Images/logo.png'} alt='not-found' height={50} width={50}/> */}
                    {/* <Image src="/Images/logo.png" alt='notfound' width={200} height={200}/> */}
                    <p>Lost In Translation</p>
                </div>
                <p>Categories</p>
                <p>Leaderboard</p>
                <form className='flex bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg text-black p-1 px-2 text-sm'>
                    <div>

                        <input placeholder='Search' className='outline-none  h-full' />
                    </div>
                    <button type='submit' className=' h-full' >
                        <BiSearch className='h-full' size={25} color='black' />
                    </button>
                </form>
            </div>
            <div className='py-5'>
                <button className='bg-[#FED233] text-black border-2 border-black rounded-xl px-4 py-1 '>
                    Sign Up
                </button>
            </div>
        </div>
    )
}