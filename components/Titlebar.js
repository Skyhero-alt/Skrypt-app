import Image from 'next/image'

export default function Titlebar(){
    return(
        <div className='w-screen fixed z-51 top-0 bg-black drop-shadow-xl p-5'>
            <Image className='object-contain rounded-full' src="https://cdn.discordapp.com/attachments/905074139327516691/931890926509510746/skrypt-app.gif" height={100} width={100} />
        </div>
    )
}