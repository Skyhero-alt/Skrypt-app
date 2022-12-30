import Image from 'next/image'
import { useState } from 'react';
import {useMoralis} from 'react-moralis';
import Titlebar from './Titlebar';

function Login() {
    
    const{isAuthenticated,authenticate}=useMoralis();
    const[check,setCheck]=useState(false);

    return (
        <div className="bg-black relative text-white">
            <div className='text-7xl font-sans pt-5 text-red-400 px-5 lg:w-3/5 relative z-50 lg:float-left backdrop-grayscale h-screen bg-black bg-opacity-70'>
            <Image className='object-contain rounded-full' src="https://cdn.discordapp.com/attachments/905074139327516691/931890926509510746/skrypt-app.gif" height={100} width={100} />
                <h1><b>Chat across the globe securely</b></h1>
                <h2 className='text-4xl pt-10 text-stone-300'><b>Using your metamask wallet</b></h2>
                <div className='bg-indigo-400 px-3 py-5 mt-20 rounded-md'>
                    <h2 className='text-3xl text-lime-800'>
                        Q) What is metamask ?
                    </h2>
                    <h3 className='text-sm pt-5 text-stone-100'>
                    MetaMask is a leading and popular cryptocurrency wallet. MetaMask is a software browser extension that makes interacting with Ethereum blockchain simple.
                    It makes interacting with the Ethereum blockchain and Dapps simple with a browser extension without having to download an entire blockchain on the device.
                    </h3>
                </div>
            </div>
            <div className='flex flex-col lg:w-2/5 lg:right-0 absolute z-50 lg:h-4/5 w-full items-center h-2/5 justify-center space-y-4'>
            {/* Logo */}
                <Image className='object-contain rounded-full' src="https://cdn.discordapp.com/attachments/905074139327516691/931890926509510746/skrypt-app.gif" height={200} width={200} />
            {/* Login Button */}
                <button onClick={
                    ()=>{
                        authenticate();
                        if(!isAuthenticated){
                            setCheck(true);
                        }
                    }
                } className='bg-black rounded-lg p-3 font-bold hover:scale-110 transition ease-in-out font-gamer'>Login to SCrpyt World</button>
            </div>

            {check && <div className='z-50 pl-5 bottom-0 opacity-100 items-center justify-center w-full absolute text-white-900 bg-red-900'>You need a metamask wallet extension or application installed to use this web application</div>
            }

            <div className="w-full h-screen">
            {/* Login Form */}
                <Image className='opacity-75' src="https://i.pinimg.com/originals/7a/e3/c7/7ae3c7ad104a968dc735871c0bf17608.gif" layout="fill" objectFit='cover'/>
            </div>

        </div>
    )
}

export default Login