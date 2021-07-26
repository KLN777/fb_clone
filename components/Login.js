import Image from 'next/image'
import {signIn} from 'next-auth/client'

function Login(){
    return(
        <div className="grid justify-center mt-60">
            <Image src="https://links.papareact.com/5me" width={100} height={100} objectFit="contain" alt=""/>
            <h1 onClick={signIn} className="bg-blue-500 rounded-full p-3 text-white font-semibold mt-10 cursor-pointer ">Login with Facebook</h1>
        </div>
    )
}

export default Login