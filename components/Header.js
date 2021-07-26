import Image from 'next/image'
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon} from "@heroicons/react/solid"
import {FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"
import {signOut} from 'next-auth/client'
import {useSession} from 'next-auth/client'


function Header(){

    const [session] = useSession()

    return(
        <div className=" sticky z-50 p-2 items-center flex justify-between bg-white shadow-md">
            {/*Left*/}
                <div className="flex items-center">
                    <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" alt=""/>
                    <div className="flex ml-2 items-center rounded-full bg-gray-200 p-2">
                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                        <input className=" hidden md:inline-flex ml-2 focus:outline-none  bg-transparent" type="text" placeholder="Search Facebook..."></input>
                    </div>
                </div>
            {/*Center*/}
                <div className="flex justify-center flex-grow">
                    <div className="flex space-x-6 md:space-x-2">
                        <HeaderIcon Icon={HomeIcon}/>
                        <HeaderIcon Icon={FlagIcon}/>
                        <HeaderIcon Icon={PlayIcon}/>
                        <HeaderIcon Icon={ShoppingCartIcon}/>
                        <HeaderIcon Icon={UserGroupIcon}/>
                    </div>
                </div>
            {/*Right*/}
                <div className="flex items-center space-x-2 justify-end">
                    <Image onClick={signOut} className="rounded-full cursor-pointer" src={session.user.image} width={40} height={40} layout="fixed" alt=""/>
                    <p className="font-semibold pr-4 whitespace-nowrap">{session.user.name}</p>
                    <BellIcon className="icon"/>
                    <ChatIcon className="icon"/>
                    <ChevronDownIcon className="icon"/>
                    <ViewGridIcon className="icon"/>
                </div>
        </div>
    );
}

export default Header